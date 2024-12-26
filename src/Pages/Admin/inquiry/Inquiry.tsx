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
import { RespondModal } from "./respond-modal";
import { InquiryDetailsModal } from "./inquiry-details-modal";
import getAuthData from "@/api/getAuthData";
import postAuthData from "@/api/postAuthData";
import { toast } from "sonner";
import { set } from "date-fns";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company_name: string;
  country: string;
  job_title: string;
  job_detail: string;
  industry: string;
  budget_range: string;
  source_of_discovery: string;
  status: "pending" | "responded";
}[];

export default function ClientInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry[0] | null>(
    null
  );
  const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchInquiryData = async () => {
    try {
      const response = await getAuthData("get_inquiry");
      if (response.status == 200) {
        setInquiries(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInquiryData();
  }, []);

  const handleRespond = (inquiry: Inquiry[0]) => {
    setSelectedInquiry(inquiry);
    setIsRespondModalOpen(true);
  };

  const handleViewDetails = (inquiry: Inquiry[0]) => {
    setSelectedInquiry(inquiry);
    setIsDetailsModalOpen(true);
  };

  const handleSendResponse = async (response: string) => {
    setLoading(true);
    try {
      const data = await postAuthData("inquiry_respond", {
        id: selectedInquiry?.id,
        subject: selectedInquiry?.job_title,
        message: response,
        email: selectedInquiry?.email,
      });
      if (data.status == 200) {
        toast.success("Response sent successfully");
        fetchInquiryData();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setIsRespondModalOpen(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Client Inquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>{inquiry.name}</TableCell>
                <TableCell>{inquiry.email}</TableCell>
                <TableCell>{inquiry.job_detail}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      inquiry.status === "responded" ? "secondary" : "default"
                    }
                  >
                    {inquiry.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleViewDetails(inquiry)}
                      variant="outline"
                      size="sm"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => handleRespond(inquiry)}
                      variant="outline"
                      size="sm"
                      disabled={inquiry.status === "responded"}
                    >
                      {inquiry.status === "responded" ? "Responded" : "Respond"}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <RespondModal
        isOpen={isRespondModalOpen}
        onClose={() => setIsRespondModalOpen(false)}
        onSend={handleSendResponse}
        inquirySubject={selectedInquiry?.job_detail || ""}
        loading={loading}
      />
      <InquiryDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        inquiry={selectedInquiry}
      />
    </Card>
  );
}
