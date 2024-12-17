import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import { Link } from "react-router-dom";
import getData from "@/api/getData";

export default function SearchInput() {
  const [open, setOpen] = useState(false); // State for popover visibility
  const [value, setValue] = useState(""); // State for the search input value
  const [relatedTerms, setRelatedTerms] = useState<string[]>([]); // State for search results
  const [loading, setLoading] = useState(false); // State for loading indicator

  const search = async () => {
    setLoading(true);
    try {
      const response = await getData("searchArticle", {
        key: encodeURIComponent(value.trim()),
      });
      if (response.status == 200) {
        setRelatedTerms(response.data);
      }
    } catch (error) {
      console.error("Error fetching related terms:", error);
      setRelatedTerms([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (value) {
        search();
      } else {
        setRelatedTerms([]);
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          type="text"
          placeholder="Search articles..."
          value={value}
          onChange={(e) => setValue(e.target.value)} // Update value on input
          className="w-[200px] lg:w-[300px]"
        />
      </PopoverTrigger>
      <PopoverContent className="w-[200px] lg:w-[300px] p-0">
        <Command>
          <CommandInput
            placeholder="Search articles..."
            onChangeCapture={(e) => setValue(e.target.value)}
          />
          <CommandList>
            {loading ? (
              <CommandEmpty>Loading...</CommandEmpty>
            ) : relatedTerms.length === 0 ? (
              <CommandEmpty>No results found.</CommandEmpty>
            ) : (
              <CommandGroup heading="Related Terms">
                {relatedTerms.map((term, index) => (
                  <Link to={`/articles/${term?.slug}`} key={index}>
                    <CommandItem>{term?.title}</CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
