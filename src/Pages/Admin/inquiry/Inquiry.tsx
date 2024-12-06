import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const inquiries = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Event Booking",
    status: "Pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Pricing Inquiry",
    status: "Responded",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    subject: "Venue Availability",
    status: "Pending",
  },
];

export default function ClientInquiries() {
  return (
    <Card>
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>{inquiry.name}</TableCell>
                <TableCell>{inquiry.email}</TableCell>
                <TableCell>{inquiry.subject}</TableCell>
                <TableCell>{inquiry.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
