import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const feedbacks = [
  {
    id: 1,
    name: "Alice Brown",
    event: "Summer Music Festival",
    rating: 5,
    comment: "Amazing event! Can't wait for next year.",
  },
  {
    id: 2,
    name: "Charlie Davis",
    event: "Tech Conference 2023",
    rating: 4,
    comment: "Great speakers, but the venue was a bit small.",
  },
  {
    id: 3,
    name: "Eva Green",
    event: "Food & Wine Expo",
    rating: 5,
    comment: "Delicious food and excellent organization!",
  },
];

export default function ClientFeedbacks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Feedbacks</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Comment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feedbacks.map((feedback) => (
              <TableRow key={feedback.id}>
                <TableCell>{feedback.name}</TableCell>
                <TableCell>{feedback.event}</TableCell>
                <TableCell>{feedback.rating}/5</TableCell>
                <TableCell>{feedback.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
