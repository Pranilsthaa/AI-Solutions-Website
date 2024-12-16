"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import StarRating from "../StarRating";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { ScaleLoader } from "react-spinners";
import { set } from "date-fns";

interface FeedbackFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [feedback, setFeedback] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Here you would typically send the feedback to your server
    try {
      const response = await axios.post(
        "http://192.168.1.106:5600/post_feedback",
        {
          name: name,
          email: email,
          service: service,
          feedback: feedback,
          url: url,
          rating: rating,
        }
      );
      if (response.status === 200) {
        toast.success("Feedback submitted successfully");
        setIsOpen(false);
      } else {
        toast.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Failed to submit feedback", error);
    } finally {
      setName("");
      setEmail("");
      setService("");
      setFeedback("");
      setUrl("");
      setRating(0);
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Toaster />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Provide Feedback</DialogTitle>
          <DialogDescription>
            We appreciate your feedback. It helps us improve our services.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service Used</Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-app">
                  Mobile App Development
                </SelectItem>
                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                <SelectItem value="cloud-services">Cloud Services</SelectItem>
                <SelectItem value="consulting">IT Consulting</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="rating">Rating</Label>
            <StarRating rating={rating} onRating={(rate) => setRating(rate)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Your Feedback</Label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2 flex flex-row items-center space-x-2">
            <Avatar className="w-16 h-16 border-2 rounded-full flex items-center justify-center">
              <AvatarImage
                src={url}
                alt="Avatar"
                className="h-16 w-16 rounded-full object-cover"
              />
              <AvatarFallback
                style={{
                  backgroundColor: "#fff",
                  fontSize: 30,
                  textTransform: "uppercase",
                }}
              >
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Photo URL (Optional)"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            {loading ? (
              <ScaleLoader color="#fff" height={22} />
            ) : (
              "Submit Feedback"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
