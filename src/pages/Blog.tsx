
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const blogPosts = [
 
  {
    id: 1,
    title: "Custom Website Development for Scalable Business Growth",
    excerpt:
      "Discover how tailor-made website solutions can enhance your online presence and support your business goals.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    date: "May 2, 2025",
    author: "Hiten Jadavra",
    authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 2,
    title: "Mobile App Development: Building Seamless iOS & Android Apps",
    excerpt:
      "Explore how native and cross-platform mobile apps can improve customer engagement and operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1559028012-dbe0e0f96e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Development",
    date: "April 28, 2025",
    author: "Aarav Patel",
    authorImage: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design Trends for Engaging User Experiences",
    excerpt:
      "Learn how effective design principles and intuitive interfaces can elevate your product’s usability.",
    image:
      "https://images.unsplash.com/photo-1607082349566-c17858411939?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "UI/UX Design",
    date: "April 20, 2025",
    author: "Meera Shah",
    authorImage: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    id: 4,
    title: "E-commerce Platform Solutions That Drive Sales",
    excerpt:
      "From Shopify to custom-built solutions, discover how the right e-commerce setup boosts conversions and customer retention.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    date: "April 15, 2025",
    author: "Hiten Jadavra",
    authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 5,
    title: "Harnessing Data Analytics & Business Intelligence for Smarter Decisions",
    excerpt:
      "Turn raw data into actionable insights using modern analytics tools and dashboards tailored for your business.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Data Analytics",
    date: "April 8, 2025",
    author: "David Chen",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 6,
    title: "AI-Powered Digital Strategies for a Smarter Future",
    excerpt:
      "Discover how AI tools can automate, predict, and enhance business processes for better outcomes.",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "AI & Automation",
    date: "April 2, 2025",
    author: "Sarah Johnson",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 7,
    title: "Web Scraping & Automation Tools: Boost Efficiency & Data Collection",
    excerpt:
      "Learn how custom scraping tools and automation scripts can give your business a competitive edge.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631f3c931d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Automation",
    date: "March 25, 2025",
    author: "Ravi Desai",
    authorImage: "https://randomuser.me/api/portraits/men/29.jpg",
  }
];


const categories = [
 "Custom Website Development ",
 "Mobile App Development (iOS & Android) ",
 "UI/UX Design for Engaging User Experiences ",
 "E-commerce Platform Solutions ",
"Data Analytics & Business Intelligence ",
 "AI-Powered Digital Marketing Strategies ",
 "Web Scraping & Automation Tools",
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-noor-brown to-noor-darkBrown py-20">
        <div className="container-width section-padding text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Insights, strategies, and tips to help you 
          succeed in the ever-evolving world of technology and innovation.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container-width section-padding">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["All", "Website Development ",
 "Mobile App Development",
 "UI/UX Design",
 "E-commerce",
"Data Analytics",
 "AI-Powered Digital Marketing  ",
 "Web Scraping",].map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-noor-gold hover:bg-opacity-90 text-white"
                        : ""
                    }
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col border border-noor-lightGray"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-noor-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-noor-brown hover:text-noor-gold transition-base">
                      <a href="#">{post.title}</a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-noor-gray text-sm mb-4">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="border-t border-noor-lightGray pt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-xs text-noor-gray">{post.author}</span>
                    </div>
                    <span className="text-xs text-noor-gray">{post.date}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2 text-noor-brown">No articles found</h3>
              <p className="text-noor-gray">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-noor-gold text-white"
              >
              1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-noor-lightGray">
        <div className="container-width section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-noor-brown">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-noor-darkBrown mb-8">
              Get the latest IT insights, tech trends, and expert tips delivered 
              straight to your inbox.   
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button className="bg-noor-gold hover:bg-opacity-90 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
