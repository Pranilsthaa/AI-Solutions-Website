import { useState } from "react";
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

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: "New" | "Responded";
  message: string;
  createdAt: string;
}

const inquiriesData = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    subject: "Product Inquiry",
    status: "New",
    message:
      "Im interested in your latest product. Can you provide more details about its features and pricing?",
    createdAt: "2023-06-01T10:00:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Support Request",
    status: "Responded",
    message:
      "Im having trouble accessing my account. Can you please help me reset my password?",
    createdAt: "2023-06-02T14:30:00Z",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    subject: "Feedback",
    status: "New",
    message:
      "Ive been using your service for a month now and I have some suggestions for improvement. Would you be interested in hearing them?",
    createdAt: "2023-06-03T09:15:00Z",
  },
];

export default function ClientInquiries() {
  const [inquiries, setInquiries] = useState(inquiriesData);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleRespond = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsRespondModalOpen(true);
  };

  const handleViewDetails = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setIsDetailsModalOpen(true);
  };

  const handleSendResponse = (response: string) => {
    // Here you would typically send the response to your backend
    console.log(
      `Sending response for inquiry ${selectedInquiry?.id}:`,
      response
    );

    // Update the inquiry status locally
    setInquiries((prevInquiries) =>
      prevInquiries.map((inq) =>
        inq.id === selectedInquiry?.id
          ? { ...inq, status: "Responded" as const }
          : inq
      )
    );
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
                <TableCell>{inquiry.subject}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      inquiry.status === "Responded" ? "success" : "default"
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
                      disabled={inquiry.status === "Responded"}
                    >
                      {inquiry.status === "Responded" ? "Responded" : "Respond"}
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
        inquirySubject={selectedInquiry?.subject || ""}
      />
      <InquiryDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        inquiry={selectedInquiry}
      />
    </Card>
  );
}
