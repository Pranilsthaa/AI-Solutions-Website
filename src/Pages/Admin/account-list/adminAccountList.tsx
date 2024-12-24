"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ConfirmTerminationModal from "./confirmTerminationModel";
import { Plus } from "lucide-react";
import { CreateAdminModal } from "./createAdminModal";
import getAuthData from "@/api/getAuthData";
import postAuthData from "@/api/postAuthData";
import { toast } from "sonner";
import { ScaleLoader } from "react-spinners";
import { set } from "date-fns";

interface AdminAccount {
  id: string;
  username: string;
  designation: string;
  role: string;
  lastActive: string;
}

export default function AdminAccountList() {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState<AdminAccount | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [selectedID, setSelectedID] = useState("");

  const createAdminAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await postAuthData("createAdmin", {
        username: username,
        password: password,
        designation: role,
      });
      if (response.status === 200) {
        toast.success("Admin created successfully");
        setIsCreateModalOpen(false);
        getAdminAccounts();
      } else {
        toast.error("An error occurred");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUsername("");
      setPassword("");
      setRole("");
      setLoading(false);
    }
  };

  const getAdminAccounts = async () => {
    try {
      const response = await getAuthData("getAdminAccounts");
      if (response.status === 200) {
        setAccounts(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTerminate = (account: AdminAccount) => {
    setSelectedAccount(account);
    setIsModalOpen(true);
  };

  const handleReactivate = async (id: string) => {
    setLoading(true);
    setSelectedID(id);
    try {
      const response = await postAuthData("reactivateAdminAccount", { id });
      if (response.status === 200) {
        toast.success(response.data.message);
        getAdminAccounts();
      } else {
        toast.error("An error occurred");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAdminAccounts();
  }, []);

  const confirmTermination = async () => {
    setLoading(true);
    try {
      if (selectedAccount) {
        const response = await postAuthData("terminateAdminAccount", {
          id: selectedAccount.id,
        });
        if (response.status === 200) {
          toast.success(response.data.message);
          getAdminAccounts();
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSelectedAccount(null);
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Admin Accounts</CardTitle>
        <Button onClick={() => setIsCreateModalOpen(true)} size="sm">
          <Plus className="mr-2 h-4 w-4" /> Create Admin
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts &&
              accounts.length > 0 &&
              accounts?.map((account: AdminAccount) => (
                <TableRow key={account.id}>
                  <TableCell>{account.username}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{account.designation}</Badge>
                  </TableCell>
                  <TableCell>
                    {account.role == "admin" ? (
                      <Button
                        onClick={() => handleTerminate(account)}
                        variant="destructive"
                        size="sm"
                      >
                        Terminate
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleReactivate(account.id)}
                        variant="outline"
                        size="sm"
                      >
                        {loading && account.id == selectedID ? (
                          <ScaleLoader color="black" height={8} />
                        ) : (
                          "Reactivate"
                        )}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
      <ConfirmTerminationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmTermination}
        accountName={selectedAccount?.username || ""}
        loading={loading}
      />
      <CreateAdminModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={createAdminAccount}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        role={role}
        setRole={setRole}
        loading={loading}
      />
    </Card>
  );
}
