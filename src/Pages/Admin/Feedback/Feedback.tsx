import getData from "@/api/getData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

// const feedbacks = [
//   {
//     id: 1,
//     name: "Alice Brown",
//     event: "Summer Music Festival",
//     rating: 5,
//     comment: "Amazing event! Can't wait for next year.",
//   },
//   {
//     id: 2,
//     name: "Charlie Davis",
//     event: "Tech Conference 2023",
//     rating: 4,
//     comment: "Great speakers, but the venue was a bit small.",
//   },
//   {
//     id: 3,
//     name: "Eva Green",
//     event: "Food & Wine Expo",
//     rating: 5,
//     comment: "Delicious food and excellent organization!",
//   },
// ];
type feedbackData = {
  id: number;
  name: string;
  email: string;
  service: string;
  rating: number;
  message: string;
  image: string;
}[];

export default function ClientFeedbacks() {
  const [feedbacks, setFeedbacks] = useState<feedbackData>([]);

  const getFeedbacks = async () => {
    try {
      const response = await getData("getfeedbacks");
      if (response.status == 200) {
        setFeedbacks(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Feedbacks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Photo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feedbacks.map((feedback) => (
                <TableRow key={feedback.id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage
                        src={feedback.image}
                        alt={`${feedback.name}'s photo`}
                      />
                      <AvatarFallback>{feedback.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{feedback.name}</TableCell>
                  <TableCell>{feedback.email}</TableCell>
                  <TableCell>{feedback.service}</TableCell>
                  <TableCell>{feedback.rating}/5</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {feedback.message}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
