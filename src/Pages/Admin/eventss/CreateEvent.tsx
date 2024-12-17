import { useState, ChangeEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import CustomButton from "@/components/CustomButton";
import { toast, Toaster } from "sonner";
import postData from "@/api/postData";

interface Speaker {
  name: string;
  photo: string;
  designation: string;
}

interface FormData {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  date: Date | null;
  location: string;
  banner: File | null;
  additionalImages: File[];
  speakers: Speaker[];
}

export default function CreateEvent() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    date: null,
    location: "",
    banner: null,
    additionalImages: [],
    speakers: [{ name: "", photo: "", designation: "" }],
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (index !== undefined && name.startsWith("speaker")) {
      const field = name.split(".")[1] as keyof Speaker;
      setFormData((prevData) => ({
        ...prevData,
        speakers: prevData.speakers.map((speaker, i) =>
          i === index ? { ...speaker, [field]: value } : speaker
        ),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.name === "banner") {
        setFormData((prevData) => ({
          ...prevData,
          banner: e.target.files![0],
        }));
      } else if (e.target.name === "additionalImages") {
        setFormData((prevData) => ({
          ...prevData,
          additionalImages: [
            ...prevData.additionalImages,
            ...Array.from(e.target.files),
          ],
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("startTime", formData.startTime);
    data.append("endTime", formData.endTime);
    data.append("date", formData.date ? formData.date.toISOString() : "");
    data.append("location", formData.location);
    data.append("speakers", JSON.stringify(formData.speakers));
    if (formData.banner) {
      data.append("banner", formData.banner);
    }
    formData.additionalImages.forEach((image) => {
      data.append(`additionalImages`, image);
    });
    try {
      const response = await postData("postevents", data);
      if (response.status === 200) {
        toast.success("Event created successfully");
      } else {
        console.log(`Failed to create event: ${response.statusText}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const addSpeaker = () => {
    setFormData((prevData) => ({
      ...prevData,
      speakers: [
        ...prevData.speakers,
        { name: "", photo: "", designation: "" },
      ],
    }));
  };

  const removeSpeaker = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      speakers: prevData.speakers.filter((_, i) => i !== index),
    }));
  };

  const removeAdditionalImage = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      additionalImages: prevData.additionalImages.filter((_, i) => i !== index),
    }));
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <Toaster />
      <CardHeader>
        <CardTitle className="text-2xl">Create New Event</CardTitle>
        <CardDescription>
          Fill in the details to create a new event.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your event"
                rows={4}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <DatePicker
                    selected={formData.date}
                    onChange={(date: Date) =>
                      setFormData((prev) => ({ ...prev, date }))
                    }
                    customInput={<CustomButton date={formData.date} />}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Event location"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  id="startTime"
                  name="startTime"
                  type="time"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endTime">End Time</Label>
                <Input
                  id="endTime"
                  name="endTime"
                  type="time"
                  value={formData.endTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="banner">Event Banner</Label>
              <div className="flex items-center space-x-4">
                <Input
                  id="banner"
                  name="banner"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full"
                />
                {formData.banner && (
                  <img
                    src={URL.createObjectURL(formData.banner)}
                    alt="Event Banner Preview"
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalImages">Additional Images</Label>
              <Input
                id="additionalImages"
                name="additionalImages"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="w-full"
              />
              <div className="grid grid-cols-3 gap-2 mt-2">
                {formData.additionalImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Additional Image ${index + 1}`}
                      className="w-full h-24 object-cover rounded"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1"
                      onClick={() => removeAdditionalImage(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-lg font-semibold">Speakers</Label>
              <Button
                type="button"
                onClick={addSpeaker}
                variant="outline"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-2" /> Add Speaker
              </Button>
            </div>
            {formData.speakers.map((speaker, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-lg">Speaker {index + 1}</CardTitle>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSpeaker(index)}
                    disabled={formData.speakers.length === 1}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={speaker.photo} alt={speaker.name} />
                      <AvatarFallback>
                        {speaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <Input
                        name={`speaker.name`}
                        value={speaker.name}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Speaker Name"
                      />
                      <Input
                        name={`speaker.designation`}
                        value={speaker.designation}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Speaker Designation"
                      />
                    </div>
                  </div>
                  <Input
                    name={`speaker.photo`}
                    value={speaker.photo}
                    onChange={(e) => handleChange(e, index)}
                    placeholder="Speaker Photo URL"
                  />
                </div>
              </Card>
            ))}
          </div>
          <CardFooter>
            <Button className="w-full">Create Event</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
