import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

const SearchFilters = () => {
  const subjects = ["Mathematics", "Science", "English", "History", "Physics", "Chemistry"];
  const priceRanges = ["$10-25/hr", "$25-50/hr", "$50-75/hr", "$75+/hr"];

  return (
    <div className="bg-muted/20 border-b border-border/50">
      <div className="container py-6">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search by subject, tutor name, or keyword..." 
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject.toLowerCase()}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="now">Available Now</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="anytime">Anytime</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Active Filters */}
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="px-3 py-1">
              Mathematics
              <X className="ml-2 h-3 w-3 cursor-pointer" />
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              $25-50/hr
              <X className="ml-2 h-3 w-3 cursor-pointer" />
            </Badge>
            <Button variant="ghost" size="sm" className="text-xs">
              Clear all filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;