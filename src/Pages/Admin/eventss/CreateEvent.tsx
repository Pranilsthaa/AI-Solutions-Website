import { useState, ChangeEvent } from "react";
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
import { X, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import axios from "axios";

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    date: "",
    location: "",
    banner: null as File | null,
    speakers: [{ name: "", photo: "", designation: "" }],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;
    if (index !== undefined && name.startsWith("speaker")) {
      const field = name.split(".")[1];
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
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        banner: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("startTime", formData.startTime);
    data.append("endTime", formData.endTime);
    data.append("date", formData.date);
    data.append("location", formData.location);
    data.append("speakers", JSON.stringify(formData.speakers));
    data.append("banner", formData.banner as Blob);
    try {
      const response = await axios.post(
        "http://192.168.1.106:5600/postevents",
        data
      );
      if (response.status === 201) {
        alert("Event created successfully");
        console.log(response.data);
      } else {
        alert("Failed to create event");
      }
    } catch (error) {
      console.error("Failed to create event", error);
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

  return (
    <Card className="w-full max-w-3xl mx-auto">
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
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
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
