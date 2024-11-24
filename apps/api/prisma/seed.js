const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const bcrypt = require('bcrypt')

const saltRounds = 10
const hashPassword = async(password) => {
    return await bcrypt.hash(password, saltRounds)
}

const creators = [
    { email: 'krapela@gmail.com', password: 'krapela123' },
    { email: 'john.smith@example.com', password: 'john12345' },
    { email: 'susan.jones@example.com', password: 'susie@2024' },
    { email: 'michael.brown@example.com', password: 'mikeB@2024' },
    { email: 'lisa.white@example.com', password: 'lisa123!' },
    { email: 'david.miller@example.com', password: 'david2024#' },
    { email: 'emma.davis@example.com', password: 'emmaD@123' },
    { email: 'chris.garcia@example.com', password: 'chrisG@123' },
    { email: 'olivia.martin@example.com', password: 'olivia2024' },
    { email: 'daniel.lopez@example.com', password: 'daniel!2024' },
    { email: 'ava.wilson@example.com', password: 'avaW2024@' },
    { email: 'william.harris@example.com', password: 'william2024#' },
    { email: 'mia.clark@example.com', password: 'miaC2024!' },
    { email: 'james.lewis@example.com', password: 'james@2024' },
    { email: 'lucy.young@example.com', password: 'lucyY123!' },
    { email: 'henry.king@example.com', password: 'henryK@2024' },
    { email: 'ella.scott@example.com', password: 'ellaS@123' },
    { email: 'jack.green@example.com', password: 'jack@2024' },
    { email: 'sofia.adams@example.com', password: 'sofia@123' },
    { email: 'charlie.baker@example.com', password: 'charlieB@2024' },
    { email: 'amelia.nelson@example.com', password: 'amelia2024@' },
    { email: 'george.carter@example.com', password: 'georgeC@123' },
    { email: 'sophia.mitchell@example.com', password: 'sophia2024!' },
    { email: 'jacob.rodriguez@example.com', password: 'jacobR@123' },
    { email: 'harper.perez@example.com', password: 'harper@2024' },
    { email: 'ethan.sanchez@example.com', password: 'ethanS@2024' },
    { email: 'isabella.gonzalez@example.com', password: 'isabella2024!' },
    { email: 'matthew.wilson@example.com', password: 'matthew@2024' },
    { email: 'elizabeth.martinez@example.com', password: 'elizabeth@123' },
    { email: 'ryan.moore@example.com', password: 'ryan@2024' }
];

const events = [
    {
      name: "Tech Innovations 2024",
      image: "https://images.unsplash.com/photo-1604014593774-c1a8a5a47d3e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNjg5MzI5Mjc3&ixlib=rb-1.2.1&q=80&w=1080",
      startDate: new Date("2024-12-10T00:00:00Z"),
      endDate: new Date("2024-12-12T00:00:00Z"),
      startTime: new Date("2024-12-10T08:00:00Z"),
      endTime: new Date("2024-12-12T16:00:00Z"),
      location: "Innovation Hall, San Francisco",
      address: "123 Innovation Drive, San Francisco, CA",
      url: "https://techinnovations2024.com",
      description: "A premier event showcasing the latest breakthroughs in technology, including AI, quantum computing, and space exploration.",
      termsAndCondition: "Non-refundable registration fee applies.",
      eventTicket: [
        {
          ticketName: "VIP Pass - Tech Innovations 2024",
          qty: 150,
          price: 500,
          ticketDescription: "VIP pass includes exclusive demos, networking events, and meet-and-greets with industry leaders.",
          ticketStartDate: new Date("2024-12-10T00:00:00Z"),
          ticketEndDate: new Date("2024-12-12T00:00:00Z"),
          ticketStartTime: new Date("2024-12-10T08:00:00Z"),
          ticketEndTime: new Date("2024-12-12T16:00:00Z")
        },
        {
          ticketName: "General Admission - Tech Innovations 2024",
          qty: 2000,
          price: 120,
          ticketDescription: "General access to all tech exhibits, panel discussions, and product launches.",
          ticketStartDate: new Date("2024-12-10T00:00:00Z"),
          ticketEndDate: new Date("2024-12-12T00:00:00Z"),
          ticketStartTime: new Date("2024-12-10T08:00:00Z"),
          ticketEndTime: new Date("2024-12-12T16:00:00Z")
        }
      ]
    },
  {
    name: "Health & Wellness Expo 2024",
    image: "https://images.unsplash.com/photo-1601043598947-9e1b2c21a18d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGhlYWx0aHxlbnwwfHx8fDE2ODkzMjkyNzE&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-15T00:00:00Z"),
    endDate: new Date("2024-12-17T00:00:00Z"),
    startTime: new Date("2024-12-15T09:00:00Z"),
    endTime: new Date("2024-12-17T18:00:00Z"),
    location: "Wellness Center, Los Angeles",
    address: "456 Health Street, Los Angeles, CA",
    url: "https://wellnessexpo2024.com",
    description: "Join us for an immersive experience with experts and exhibitors covering the latest in health, fitness, and wellness.",
    termsAndCondition: "By registering, you agree to all event terms and conditions, including health precautions.",
    eventTicket: [
      {
        ticketName: "Premium Access - Health & Wellness Expo 2024",
        qty: 100,
        price: 250,
        ticketDescription: "Premium access to workshops, personalized health consultations, and VIP speaker sessions.",
        ticketStartDate: new Date("2024-12-15T00:00:00Z"),
        ticketEndDate: new Date("2024-12-17T00:00:00Z"),
        ticketStartTime: new Date("2024-12-15T09:00:00Z"),
        ticketEndTime: new Date("2024-12-17T18:00:00Z")
      },
      {
        ticketName: "General Admission - Health & Wellness Expo 2024",
        qty: 1500,
        price: 50,
        ticketDescription: "Access to all general exhibits, free health screenings, and public seminars.",
        ticketStartDate: new Date("2024-12-15T00:00:00Z"),
        ticketEndDate: new Date("2024-12-17T00:00:00Z"),
        ticketStartTime: new Date("2024-12-15T09:00:00Z"),
        ticketEndTime: new Date("2024-12-17T18:00:00Z")
      }
    ]
  },
  {
    name: "Music Festival 2024",
    image: "https://images.unsplash.com/photo-1591831979342-9d6b8c7a1953?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG11c2ljfGVufDB8fHx8fDE2ODkzMjkyODg&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-20T00:00:00Z"),
    endDate: new Date("2024-12-22T00:00:00Z"),
    startTime: new Date("2024-12-20T14:00:00Z"),
    endTime: new Date("2024-12-22T23:00:00Z"),
    location: "Beachfront Park, Miami",
    address: "789 Ocean Drive, Miami, FL",
    url: "https://musicfestival2024.com",
    description: "A three-day music festival with performances from top artists across multiple genres, including rock, pop, and electronic.",
    termsAndCondition: "All sales are final. No refunds, except for event cancellation.",
    eventTicket: [
      {
        ticketName: "VIP Experience - Music Festival 2024",
        qty: 300,
        price: 350,
        ticketDescription: "VIP experience with front-stage access, meet-and-greet with artists, and exclusive backstage tours.",
        ticketStartDate: new Date("2024-12-20T00:00:00Z"),
        ticketEndDate: new Date("2024-12-22T00:00:00Z"),
        ticketStartTime: new Date("2024-12-20T14:00:00Z"),
        ticketEndTime: new Date("2024-12-22T23:00:00Z")
      },
      {
        ticketName: "General Admission - Music Festival 2024",
        qty: 5000,
        price: 100,
        ticketDescription: "General access to all performances and festival activities.",
        ticketStartDate: new Date("2024-12-20T00:00:00Z"),
        ticketEndDate: new Date("2024-12-22T00:00:00Z"),
        ticketStartTime: new Date("2024-12-20T14:00:00Z"),
        ticketEndTime: new Date("2024-12-22T23:00:00Z")
      }
    ]
  },
  {
    name: "Foodie Fest 2024",
    image: "https://images.unsplash.com/photo-1506363142343-6a32d10cc412?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvb2R8ZW58MHx8fHwxNjg5MzI5MzU2&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-25T00:00:00Z"),
    endDate: new Date("2024-12-26T00:00:00Z"),
    startTime: new Date("2024-12-25T10:00:00Z"),
    endTime: new Date("2024-12-26T20:00:00Z"),
    location: "Gastronomy Arena, New York",
    address: "654 Taste Lane, New York, NY",
    url: "https://foodiefest2024.com",
    description: "Indulge in a two-day festival celebrating the finest culinary creations from renowned chefs and food vendors.",
    termsAndCondition: "Tickets are non-refundable. Food samples not included.",
    eventTicket: [
      {
        ticketName: "Chef's Table Access - Foodie Fest 2024",
        qty: 50,
        price: 500,
        ticketDescription: "Exclusive access to private chef tables, cooking demonstrations, and wine pairings.",
        ticketStartDate: new Date("2024-12-25T00:00:00Z"),
        ticketEndDate: new Date("2024-12-26T00:00:00Z"),
        ticketStartTime: new Date("2024-12-25T10:00:00Z"),
        ticketEndTime: new Date("2024-12-26T20:00:00Z")
      },
      {
        ticketName: "General Admission - Foodie Fest 2024",
        qty: 3000,
        price: 80,
        ticketDescription: "General access to food stalls, live cooking shows, and food-themed workshops.",
        ticketStartDate: new Date("2024-12-25T00:00:00Z"),
        ticketEndDate: new Date("2024-12-26T00:00:00Z"),
        ticketStartTime: new Date("2024-12-25T10:00:00Z"),
        ticketEndTime: new Date("2024-12-26T20:00:00Z")
      }
    ]
  },
  {
    name: "Film Premiere 2024",
    image: "https://images.unsplash.com/photo-1579146549110-8494a9db2b0d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpbG18ZW58MHx8fHwxNjg5MzI5NDU2&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-30T00:00:00Z"),
    endDate: new Date("2024-12-30T00:00:00Z"),
    startTime: new Date("2024-12-30T18:00:00Z"),
    endTime: new Date("2024-12-30T22:00:00Z"),
    location: "Sunset Theatre, Hollywood",
    address: "123 Cinema Blvd, Hollywood, CA",
    url: "https://film-premiere2024.com",
    description: "Join us for an exclusive red-carpet event celebrating the premiere of the highly anticipated film of 2024.",
    termsAndCondition: "Dress code: Formal attire. No outside food or beverages allowed.",
    eventTicket: [
      {
        ticketName: "VIP Premiere - Film Premiere 2024",
        qty: 100,
        price: 800,
        ticketDescription: "VIP access to the red carpet, after-party, and meet-and-greet with the cast and crew.",
        ticketStartDate: new Date("2024-12-30T00:00:00Z"),
        ticketEndDate: new Date("2024-12-30T00:00:00Z"),
        ticketStartTime: new Date("2024-12-30T18:00:00Z"),
        ticketEndTime: new Date("2024-12-30T22:00:00Z")
      },
      {
        ticketName: "General Admission - Film Premiere 2024",
        qty: 500,
        price: 150,
        ticketDescription: "General access to the premiere screening and popcorn.",
        ticketStartDate: new Date("2024-12-30T00:00:00Z"),
        ticketEndDate: new Date("2024-12-30T00:00:00Z"),
        ticketStartTime: new Date("2024-12-30T18:00:00Z"),
        ticketEndTime: new Date("2024-12-30T22:00:00Z")
      }
    ]
  },
  {
    name: "Green Energy Summit 2024",
    image: "https://images.unsplash.com/photo-1601903085193-d6a01fdb563f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdyZWVuJTIwZW5lcmd5fGVufDB8fHx8fDE2ODkzMjkzNTM&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-11-01T00:00:00Z"),
    endDate: new Date("2024-11-03T00:00:00Z"),
    startTime: new Date("2024-11-01T09:00:00Z"),
    endTime: new Date("2024-11-03T17:00:00Z"),
    location: "Eco Arena, Seattle",
    address: "800 Green Avenue, Seattle, WA",
    url: "https://greenenergysummit2024.com",
    description: "A global summit focusing on renewable energy solutions and sustainable practices in various industries.",
    termsAndCondition: "Please follow all environmental guidelines and event policies.",
    eventTicket: [
      {
        ticketName: "Exclusive Access - Green Energy Summit 2024",
        qty: 100,
        price: 350,
        ticketDescription: "Access to private workshops, networking with industry leaders, and exclusive green tech showcases.",
        ticketStartDate: new Date("2024-11-01T00:00:00Z"),
        ticketEndDate: new Date("2024-11-03T00:00:00Z"),
        ticketStartTime: new Date("2024-11-01T09:00:00Z"),
        ticketEndTime: new Date("2024-11-03T17:00:00Z")
      },
      {
        ticketName: "General Admission - Green Energy Summit 2024",
        qty: 2000,
        price: 75,
        ticketDescription: "General entry to the exhibition, panel discussions, and green product demos.",
        ticketStartDate: new Date("2024-11-01T00:00:00Z"),
        ticketEndDate: new Date("2024-11-03T00:00:00Z"),
        ticketStartTime: new Date("2024-11-01T09:00:00Z"),
        ticketEndTime: new Date("2024-11-03T17:00:00Z")
      }
    ]
  },
    {
      name: "Fashion Forward 2024",
      image: "https://images.unsplash.com/photo-1524748720335-cd8f059ec6db?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGZhc2hpb258ZW58MHx8fHwxNjg5MzI5NjYz&ixlib=rb-1.2.1&q=80&w=1080",
      startDate: new Date("2024-11-10T00:00:00Z"),
      endDate: new Date("2024-11-12T00:00:00Z"),
      startTime: new Date("2024-11-10T11:00:00Z"),
      endTime: new Date("2024-11-12T21:00:00Z"),
      location: "City Fashion Mall, New York",
      address: "455 Runway Road, New York, NY",
      url: "https://fashionforward2024.com",
      description: "A fashion extravaganza showcasing the best of local and international designers, trendsetters, and brands.",
      termsAndCondition: "Non-refundable tickets, and all event attendees must adhere to the dress code.",
      eventTicket: [
        {
          ticketName: "VIP Experience - Fashion Forward 2024",
          qty: 200,
          price: 400,
          ticketDescription: "Exclusive access to fashion shows, backstage tours, and designer meet-and-greets.",
          ticketStartDate: new Date("2024-11-10T00:00:00Z"),
          ticketEndDate: new Date("2024-11-12T00:00:00Z"),
          ticketStartTime: new Date("2024-11-10T11:00:00Z"),
          ticketEndTime: new Date("2024-11-12T21:00:00Z")
        },
        {
          ticketName: "Standard Admission - Fashion Forward 2024",
          qty: 5000,
          price: 100,
          ticketDescription: "Access to all fashion shows, pop-up shops, and beauty product showcases.",
          ticketStartDate: new Date("2024-11-10T00:00:00Z"),
          ticketEndDate: new Date("2024-11-12T00:00:00Z"),
          ticketStartTime: new Date("2024-11-10T11:00:00Z"),
          ticketEndTime: new Date("2024-11-12T21:00:00Z")
        }
      ]
    },
    {
      name: "Global Startup Pitch 2024",
      image: "https://images.unsplash.com/photo-1544194042-c73e98c56ab0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN0YXJ0dXBwZXN8ZW58MHx8fHwxNjg5MzI5NzI3&ixlib=rb-1.2.1&q=80&w=1080",
      startDate: new Date("2024-11-15T00:00:00Z"),
      endDate: new Date("2024-11-16T00:00:00Z"),
      startTime: new Date("2024-11-15T10:00:00Z"),
      endTime: new Date("2024-11-16T18:00:00Z"),
      location: "Innovation Hub, Chicago",
      address: "900 Entrepreneur Blvd, Chicago, IL",
      url: "https://globalstartuppitch2024.com",
      description: "A high-energy event where entrepreneurs pitch their startups to investors, mentors, and potential partners.",
      termsAndCondition: "Only registered startups are eligible for the pitch competition. All attendees must follow event guidelines.",
      eventTicket: [
        {
          ticketName: "Investor Access - Global Startup Pitch 2024",
          qty: 50,
          price: 600,
          ticketDescription: "VIP access for investors to exclusive pitch sessions and private networking events.",
          ticketStartDate: new Date("2024-11-15T00:00:00Z"),
          ticketEndDate: new Date("2024-11-16T00:00:00Z"),
          ticketStartTime: new Date("2024-11-15T10:00:00Z"),
          ticketEndTime: new Date("2024-11-16T18:00:00Z")
        },
        {
          ticketName: "General Admission - Global Startup Pitch 2024",
          qty: 2000,
          price: 40,
          ticketDescription: "Access to the pitch sessions, panel discussions, and innovation showcases.",
          ticketStartDate: new Date("2024-11-15T00:00:00Z"),
          ticketEndDate: new Date("2024-11-16T00:00:00Z"),
          ticketStartTime: new Date("2024-11-15T10:00:00Z"),
          ticketEndTime: new Date("2024-11-16T18:00:00Z")
        }
      ]
    },
    {
      name: "Adventure Sports Expo 2024",
      image: "https://images.unsplash.com/photo-1601491523440-d7a90e5eaa0b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGFkdmVudHVyZSUyMHNwb3J0c3xlbnwwfHx8fDE2ODkzMjk0NDE&ixlib=rb-1.2.1&q=80&w=1080",
      startDate: new Date("2024-11-18T00:00:00Z"),
      endDate: new Date("2024-11-20T00:00:00Z"),
      startTime: new Date("2024-11-18T09:00:00Z"),
      endTime: new Date("2024-11-20T17:00:00Z"),
      location: "Sports Arena, Denver",
      address: "345 Extreme Avenue, Denver, CO",
      url: "https://adventuresportsexpo2024.com",
      description: "Get your adrenaline pumping with live demonstrations, gear showcases, and expert advice on adventure sports.",
      termsAndCondition: "Participants must sign a waiver for certain high-risk activities.",
      eventTicket: [
        {
          ticketName: "VIP Adventure Access - Adventure Sports Expo 2024",
          qty: 100,
          price: 450,
          ticketDescription: "Exclusive access to expert-led adventure activities, gear testing, and VIP meetups.",
          ticketStartDate: new Date("2024-11-18T00:00:00Z"),
          ticketEndDate: new Date("2024-11-20T00:00:00Z"),
          ticketStartTime: new Date("2024-11-18T09:00:00Z"),
          ticketEndTime: new Date("2024-11-20T17:00:00Z")
        },
        {
          ticketName: "General Admission - Adventure Sports Expo 2024",
          qty: 4000,
          price: 60,
          ticketDescription: "Access to all exhibitions, outdoor gear sales, and public sports demonstrations.",
          ticketStartDate: new Date("2024-11-18T00:00:00Z"),
          ticketEndDate: new Date("2024-11-20T00:00:00Z"),
          ticketStartTime: new Date("2024-11-18T09:00:00Z"),
          ticketEndTime: new Date("2024-11-20T17:00:00Z")
        }
      ]
    },
    {
      name: "Digital Art Showcase 2024",
      image: "https://images.unsplash.com/photo-1594730543761-ded2d564ab29?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8fHwxNjg5MzI5NzU5&ixlib=rb-1.2.1&q=80&w=1080",
      startDate: new Date("2024-11-22T00:00:00Z"),
      endDate: new Date("2024-11-24T00:00:00Z"),
      startTime: new Date("2024-11-22T12:00:00Z"),
      endTime: new Date("2024-11-24T20:00:00Z"),
      location: "Art Gallery, San Diego",
      address: "222 Digital Lane, San Diego, CA",
      url: "https://digitalartshowcase2024.com",
      description: "An immersive digital art exhibition where technology meets creativity with VR, AR, and interactive installations.",
      termsAndCondition: "Please bring a valid ID for registration. No outside electronics allowed.",
      eventTicket: [
        {
          ticketName: "VIP Digital Art Experience - Digital Art Showcase 2024",
          qty: 50,
          price: 500,
          ticketDescription: "VIP access to exclusive VR experiences, digital art demos, and artist meet-ups.",
          ticketStartDate: new Date("2024-11-22T00:00:00Z"),
          ticketEndDate: new Date("2024-11-24T00:00:00Z"),
          ticketStartTime: new Date("2024-11-22T12:00:00Z"),
          ticketEndTime: new Date("2024-11-24T20:00:00Z")
        },
        {
          ticketName: "General Admission - Digital Art Showcase 2024",
          qty: 2500,
          price: 75,
          ticketDescription: "Access to all digital art installations, virtual reality experiences, and live digital performances.",
          ticketStartDate: new Date("2024-11-22T00:00:00Z"),
          ticketEndDate: new Date("2024-11-24T00:00:00Z"),
          ticketStartTime: new Date("2024-11-22T12:00:00Z"),
          ticketEndTime: new Date("2024-11-24T20:00:00Z")
        }
      ]
    },
    {
      name: "Tech Innovations Expo 2024",
      image: "https://images.unsplash.com/photo-1566818013-3c6793b68568?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNjg5MzI5NjI5&ixlib=rb-1.2.1&q=80&w=1080",
      startDate: new Date("2024-12-01T00:00:00Z"),
      endDate: new Date("2024-12-03T00:00:00Z"),
      startTime: new Date("2024-12-01T10:00:00Z"),
      endTime: new Date("2024-12-03T18:00:00Z"),
      location: "Tech City Conference Center, Austin",
      address: "123 Innovation Drive, Austin, TX",
      url: "https://techinnovationsexpo2024.com",
      description: "Discover the latest breakthroughs in AI, robotics, and smart technology at this global tech expo.",
      termsAndCondition: "Please bring a valid ID for registration. No outside electronics allowed.",
      eventTicket: [
        {
          ticketName: "VIP Tech Access - Tech Innovations Expo 2024",
          qty: 150,
          price: 500,
          ticketDescription: "Access to exclusive product launches, VIP networking events, and hands-on demonstrations.",
          ticketStartDate: new Date("2024-12-01T00:00:00Z"),
          ticketEndDate: new Date("2024-12-03T00:00:00Z"),
          ticketStartTime: new Date("2024-12-01T10:00:00Z"),
          ticketEndTime: new Date("2024-12-03T18:00:00Z")
        },
        {
          ticketName: "General Admission - Tech Innovations Expo 2024",
          qty: 3000,
          price: 100,
          ticketDescription: "General entry to tech showcases, panel discussions, and interactive workshops.",
          ticketStartDate: new Date("2024-12-01T00:00:00Z"),
          ticketEndDate: new Date("2024-12-03T00:00:00Z"),
          ticketStartTime: new Date("2024-12-01T10:00:00Z"),
          ticketEndTime: new Date("2024-12-03T18:00:00Z")
        }
      ]
    },
  {
    name: "Jazz & Blues Festival 2024",
    image: "https://images.unsplash.com/photo-1521747116042-c73e98c56ab0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGphemolMjBhbmQlMjBibHVlcyUyMGZlc3RpdmFsfGVufDB8fHx8fDE2ODkzMjk2NzY&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-05T00:00:00Z"),
    endDate: new Date("2024-12-07T00:00:00Z"),
    startTime: new Date("2024-12-05T18:00:00Z"),
    endTime: new Date("2024-12-07T23:00:00Z"),
    location: "Riverfront Park, New Orleans",
    address: "456 Music Lane, New Orleans, LA",
    url: "https://jazzbluesfestival2024.com",
    description: "Celebrate the best of jazz and blues with performances from top artists and rising stars in the industry.",
    termsAndCondition: "Ticket holders must follow event guidelines. No outside food or drink allowed.",
    eventTicket: [
      {
        ticketName: "VIP Experience - Jazz & Blues Festival 2024",
        qty: 100,
        price: 250,
        ticketDescription: "Enjoy front-row seats, backstage access, and VIP meet-and-greets with musicians.",
        ticketStartDate: new Date("2024-12-05T00:00:00Z"),
        ticketEndDate: new Date("2024-12-07T00:00:00Z"),
        ticketStartTime: new Date("2024-12-05T18:00:00Z"),
        ticketEndTime: new Date("2024-12-07T23:00:00Z")
      },
      {
        ticketName: "General Admission - Jazz & Blues Festival 2024",
        qty: 5000,
        price: 75,
        ticketDescription: "Access to all performances, food and drink stalls, and festival activities.",
        ticketStartDate: new Date("2024-12-05T00:00:00Z"),
        ticketEndDate: new Date("2024-12-07T00:00:00Z"),
        ticketStartTime: new Date("2024-12-05T18:00:00Z"),
        ticketEndTime: new Date("2024-12-07T23:00:00Z")
      }
    ]
  },
  {
    name: "Gastronomy World Fair 2024",
    image: "https://images.unsplash.com/photo-1543944789-42f7a88b5126?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGdhc3Ryb25vbXklMjBhbmQlMjBmb29kfGVufDB8fHx8fDE2ODkzMjk2ODM&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-10T00:00:00Z"),
    endDate: new Date("2024-12-12T00:00:00Z"),
    startTime: new Date("2024-12-10T12:00:00Z"),
    endTime: new Date("2024-12-12T20:00:00Z"),
    location: "Food Expo Hall, Los Angeles",
    address: "789 Culinary Blvd, Los Angeles, CA",
    url: "https://gastronomyworldfair2024.com",
    description: "An international culinary event showcasing the finest chefs, cooking demonstrations, and gourmet experiences.",
    termsAndCondition: "All attendees must wear proper footwear. No photography allowed in cooking areas.",
    eventTicket: [
      {
        ticketName: "Exclusive Chef's Table - Gastronomy World Fair 2024",
        qty: 50,
        price: 400,
        ticketDescription: "Dining experience with world-renowned chefs, exclusive tasting menus, and culinary workshops.",
        ticketStartDate: new Date("2024-12-10T00:00:00Z"),
        ticketEndDate: new Date("2024-12-12T00:00:00Z"),
        ticketStartTime: new Date("2024-12-10T12:00:00Z"),
        ticketEndTime: new Date("2024-12-12T20:00:00Z")
      },
      {
        ticketName: "General Admission - Gastronomy World Fair 2024",
        qty: 3000,
        price: 60,
        ticketDescription: "Access to food stalls, cooking classes, and culinary demos.",
        ticketStartDate: new Date("2024-12-10T00:00:00Z"),
        ticketEndDate: new Date("2024-12-12T00:00:00Z"),
        ticketStartTime: new Date("2024-12-10T12:00:00Z"),
        ticketEndTime: new Date("2024-12-12T20:00:00Z")
      }
    ]
  },
  {
    name: "Extreme Sports Challenge 2024",
    image: "https://images.unsplash.com/photo-1517651297731-050be6dfe85b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZleGlibG9vZGVyJTIwZGVzaWdufGVufDB8fHx8fDE2ODkzMjk3MjA&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-15T00:00:00Z"),
    endDate: new Date("2024-12-17T00:00:00Z"),
    startTime: new Date("2024-12-15T09:00:00Z"),
    endTime: new Date("2024-12-17T18:00:00Z"),
    location: "Action Park, Phoenix",
    address: "987 Adrenaline Ave, Phoenix, AZ",
    url: "https://extremesportschallenge2024.com",
    description: "A thrilling event featuring world-class athletes in various extreme sports including rock climbing, BMX, and skateboarding.",
    termsAndCondition: "Participants must sign a liability waiver for extreme activities.",
    eventTicket: [
      {
        ticketName: "Extreme VIP Access - Extreme Sports Challenge 2024",
        qty: 100,
        price: 350,
        ticketDescription: "Exclusive access to VIP viewing areas, meet-and-greets with athletes, and behind-the-scenes tours.",
        ticketStartDate: new Date("2024-12-15T00:00:00Z"),
        ticketEndDate: new Date("2024-12-17T00:00:00Z"),
        ticketStartTime: new Date("2024-12-15T09:00:00Z"),
        ticketEndTime: new Date("2024-12-17T18:00:00Z")
      },
      {
        ticketName: "General Admission - Extreme Sports Challenge 2024",
        qty: 4000,
        price: 50,
        ticketDescription: "Access to all sports events, interactive fan zones, and exhibitions.",
        ticketStartDate: new Date("2024-12-15T00:00:00Z"),
        ticketEndDate: new Date("2024-12-17T00:00:00Z"),
        ticketStartTime: new Date("2024-12-15T09:00:00Z"),
        ticketEndTime: new Date("2024-12-17T18:00:00Z")
      }
    ]
  },
  {
    name: "Film and Media Festival 2024",
    image: "https://images.unsplash.com/photo-1557737818-43e3f5a688b0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGZpbG0lMjBhbmQlMjBtZWRpfGVufDB8fHx8fDE2ODkzMjk3MzM&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-20T00:00:00Z"),
    endDate: new Date("2024-12-22T00:00:00Z"),
    startTime: new Date("2024-12-20T14:00:00Z"),
    endTime: new Date("2024-12-22T22:00:00Z"),
    location: "Cineplex Studios, Hollywood",
    address: "123 Cinema Ave, Hollywood, CA",
    url: "https://filmmediafestival2024.com",
    description: "An annual festival celebrating film, television, and digital media, featuring screenings, awards, and filmmaker Q&A sessions.",
    termsAndCondition: "Tickets are non-refundable. Event schedule subject to change.",
    eventTicket: [
      {
        ticketName: "VIP Film Screening - Film and Media Festival 2024",
        qty: 100,
        price: 300,
        ticketDescription: "Priority seating at film premieres, red carpet access, and exclusive filmmaker talks.",
        ticketStartDate: new Date("2024-12-20T00:00:00Z"),
        ticketEndDate: new Date("2024-12-22T00:00:00Z"),
        ticketStartTime: new Date("2024-12-20T14:00:00Z"),
        ticketEndTime: new Date("2024-12-22T22:00:00Z")
      },
      {
        ticketName: "General Admission - Film and Media Festival 2024",
        qty: 2000,
        price: 40,
        ticketDescription: "Access to all film screenings, panel discussions, and networking events.",
        ticketStartDate: new Date("2024-12-20T00:00:00Z"),
        ticketEndDate: new Date("2024-12-22T00:00:00Z"),
        ticketStartTime: new Date("2024-12-20T14:00:00Z"),
        ticketEndTime: new Date("2024-12-22T22:00:00Z")
      }
    ]
  },
  {
    name: "Global Music Festival 2024",
    image: "https://images.unsplash.com/photo-1520230278477-22d85926d4f6?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG11c2ljJTIwZmVzdGl2YWx8ZW58MHx8fHwxNjg5MzMwMTM4&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-25T00:00:00Z"),
    endDate: new Date("2024-12-28T00:00:00Z"),
    startTime: new Date("2024-12-25T16:00:00Z"),
    endTime: new Date("2024-12-28T23:00:00Z"),
    location: "Music Arena, Miami",
    address: "123 Music Blvd, Miami, FL",
    url: "https://globalmusicfest2024.com",
    description: "A vibrant celebration of world music with performances from global artists across different genres.",
    termsAndCondition: "Valid ticket required for entry. No pets allowed.",
    eventTicket: [
      {
        ticketName: "VIP Access - Global Music Festival 2024",
        qty: 150,
        price: 350,
        ticketDescription: "Exclusive VIP seating, backstage access, and meet-and-greet with top artists.",
        ticketStartDate: new Date("2024-12-25T00:00:00Z"),
        ticketEndDate: new Date("2024-12-28T00:00:00Z"),
        ticketStartTime: new Date("2024-12-25T16:00:00Z"),
        ticketEndTime: new Date("2024-12-28T23:00:00Z")
      },
      {
        ticketName: "General Admission - Global Music Festival 2024",
        qty: 4000,
        price: 60,
        ticketDescription: "General entry to all performances and festival activities.",
        ticketStartDate: new Date("2024-12-25T00:00:00Z"),
        ticketEndDate: new Date("2024-12-28T00:00:00Z"),
        ticketStartTime: new Date("2024-12-25T16:00:00Z"),
        ticketEndTime: new Date("2024-12-28T23:00:00Z")
      }
    ]
  },
  {
    name: "International Fashion Show 2024",
    image: "https://images.unsplash.com/photo-1515779612485-df50fffe9f8e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDk3fHxmb3NoaW9uJTIwZG9jdW1lbnRzfGVufDB8fHx8fDE2ODkzMjk3NDk&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-01T00:00:00Z"),
    endDate: new Date("2024-12-03T00:00:00Z"),
    startTime: new Date("2024-12-01T11:00:00Z"),
    endTime: new Date("2024-12-03T20:00:00Z"),
    location: "Fashion District, New York",
    address: "456 Fashion Ave, New York, NY",
    url: "https://fashionshow2024.com",
    description: "A premier event showcasing the latest trends and collections from top designers around the world.",
    termsAndCondition: "No cameras or photography allowed during the runway shows.",
    eventTicket: [
      {
        ticketName: "VIP Fashion Access - International Fashion Show 2024",
        qty: 100,
        price: 500,
        ticketDescription: "Front-row seats at the runway, access to VIP lounges, and meet designers.",
        ticketStartDate: new Date("2024-12-01T00:00:00Z"),
        ticketEndDate: new Date("2024-12-03T00:00:00Z"),
        ticketStartTime: new Date("2024-12-01T11:00:00Z"),
        ticketEndTime: new Date("2024-12-03T20:00:00Z")
      },
      {
        ticketName: "General Admission - International Fashion Show 2024",
        qty: 2000,
        price: 120,
        ticketDescription: "Access to all runway shows, fashion exhibits, and events.",
        ticketStartDate: new Date("2024-12-01T00:00:00Z"),
        ticketEndDate: new Date("2024-12-03T00:00:00Z"),
        ticketStartTime: new Date("2024-12-01T11:00:00Z"),
        ticketEndTime: new Date("2024-12-03T20:00:00Z")
      }
    ]
  },
  {
    name: "Sustainable Living Expo 2024",
    image: "https://images.unsplash.com/photo-1561572525-dc428f27b8a2?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBsYW50YnVsaXNoJTIwbmV0d29ya3xlbnwwfHx8fDE2ODkzMjk3NTM&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-10T00:00:00Z"),
    endDate: new Date("2024-12-12T00:00:00Z"),
    startTime: new Date("2024-12-10T10:00:00Z"),
    endTime: new Date("2024-12-12T18:00:00Z"),
    location: "Eco Convention Center, Portland",
    address: "789 Green Lane, Portland, OR",
    url: "https://sustainablelivingexpo2024.com",
    description: "An event dedicated to sustainable living with workshops, eco-friendly products, and green innovation talks.",
    termsAndCondition: "Tickets are non-refundable. Please bring your own reusable water bottle.",
    eventTicket: [
      {
        ticketName: "Eco VIP Experience - Sustainable Living Expo 2024",
        qty: 200,
        price: 250,
        ticketDescription: "VIP access to eco workshops, meet-and-greets with environmentalists, and sustainable product demos.",
        ticketStartDate: new Date("2024-12-10T00:00:00Z"),
        ticketEndDate: new Date("2024-12-12T00:00:00Z"),
        ticketStartTime: new Date("2024-12-10T10:00:00Z"),
        ticketEndTime: new Date("2024-12-12T18:00:00Z")
      },
      {
        ticketName: "General Admission - Sustainable Living Expo 2024",
        qty: 3000,
        price: 40,
        ticketDescription: "Access to all eco workshops, product showcases, and environmental exhibitions.",
        ticketStartDate: new Date("2024-12-10T00:00:00Z"),
        ticketEndDate: new Date("2024-12-12T00:00:00Z"),
        ticketStartTime: new Date("2024-12-10T10:00:00Z"),
        ticketEndTime: new Date("2024-12-12T18:00:00Z")
      }
    ]
  },
  {
    name: "Outdoor Adventure Summit 2024",
    image: "https://images.unsplash.com/photo-1498842550506-4592c3a4e157?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG91dGRvb3J8ZW58MHx8fHwxNjg5MzIzMzg2&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-15T00:00:00Z"),
    endDate: new Date("2024-12-17T00:00:00Z"),
    startTime: new Date("2024-12-15T08:00:00Z"),
    endTime: new Date("2024-12-17T18:00:00Z"),
    location: "Mountain Base Camp, Denver",
    address: "890 Adventure Blvd, Denver, CO",
    url: "https://outdooradventuresummit2024.com",
    description: "A summit for outdoor enthusiasts with workshops on survival skills, climbing, hiking, and nature photography.",
    termsAndCondition: "Bring appropriate gear for outdoor activities. Liability waivers required for participation.",
    eventTicket: [
      {
        ticketName: "VIP Outdoor Access - Outdoor Adventure Summit 2024",
        qty: 75,
        price: 350,
        ticketDescription: "Exclusive access to expert-led adventure workshops, guided hikes, and outdoor gear demonstrations.",
        ticketStartDate: new Date("2024-12-15T00:00:00Z"),
        ticketEndDate: new Date("2024-12-17T00:00:00Z"),
        ticketStartTime: new Date("2024-12-15T08:00:00Z"),
        ticketEndTime: new Date("2024-12-17T18:00:00Z")
      },
      {
        ticketName: "General Admission - Outdoor Adventure Summit 2024",
        qty: 1500,
        price: 80,
        ticketDescription: "Access to all workshops, presentations, and outdoor adventure zones.",
        ticketStartDate: new Date("2024-12-15T00:00:00Z"),
        ticketEndDate: new Date("2024-12-17T00:00:00Z"),
        ticketStartTime: new Date("2024-12-15T08:00:00Z"),
        ticketEndTime: new Date("2024-12-17T18:00:00Z")
      }
    ]
  },
  {
    name: "Space Exploration Expo 2024",
    image: "https://images.unsplash.com/photo-1561691507-d0d3d4e7e2d7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNwYWNlJTIwZXhwbG9yYXRpb258ZW58MHx8fHwxNjg5MzI4MjY0&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-20T00:00:00Z"),
    endDate: new Date("2024-12-22T00:00:00Z"),
    startTime: new Date("2024-12-20T09:00:00Z"),
    endTime: new Date("2024-12-22T17:00:00Z"),
    location: "Space Center, Houston",
    address: "123 Space Blvd, Houston, TX",
    url: "https://spaceexpo2024.com",
    description: "An event for space enthusiasts, featuring panels with astronauts, space agencies, and exhibitions on space exploration.",
    termsAndCondition: "Tickets must be shown at the entrance. No re-entry once you exit the event.",
    eventTicket: [
      {
        ticketName: "VIP Astronaut Access - Space Exploration Expo 2024",
        qty: 100,
        price: 450,
        ticketDescription: "Exclusive access to astronaut meet-and-greets, private space agency tours, and VIP seating at events.",
        ticketStartDate: new Date("2024-12-20T00:00:00Z"),
        ticketEndDate: new Date("2024-12-22T00:00:00Z"),
        ticketStartTime: new Date("2024-12-20T09:00:00Z"),
        ticketEndTime: new Date("2024-12-22T17:00:00Z")
      },
      {
        ticketName: "General Admission - Space Exploration Expo 2024",
        qty: 2500,
        price: 70,
        ticketDescription: "Access to all panels, space exhibits, and interactive space exploration zones.",
        ticketStartDate: new Date("2024-12-20T00:00:00Z"),
        ticketEndDate: new Date("2024-12-22T00:00:00Z"),
        ticketStartTime: new Date("2024-12-20T09:00:00Z"),
        ticketEndTime: new Date("2024-12-22T17:00:00Z")
      }
    ]
  },
  {
    name: "Virtual Reality Expo 2024",
    image: "https://images.unsplash.com/photo-1566018468-e46cf1fa9f7f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHZpcnR1YWwlMjByZWFsaXR5fGVufDB8fHx8fDE2ODkzMzA1MDE&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-01T00:00:00Z"),
    endDate: new Date("2024-12-03T00:00:00Z"),
    startTime: new Date("2024-12-01T10:00:00Z"),
    endTime: new Date("2024-12-03T18:00:00Z"),
    location: "Convention Center, San Francisco",
    address: "100 Virtual Blvd, San Francisco, CA",
    url: "https://virtualrealityexpo2024.com",
    description: "Discover the latest innovations in virtual reality, with hands-on experiences and live demos from leading VR companies.",
    termsAndCondition: "All VR content is age-appropriate for audiences 12 and older.",
    eventTicket: [
      {
        ticketName: "VIP Access - Virtual Reality Expo 2024",
        qty: 150,
        price: 500,
        ticketDescription: "Exclusive access to VIP sessions, early entry, and a private VR experience with top creators.",
        ticketStartDate: new Date("2024-12-01T00:00:00Z"),
        ticketEndDate: new Date("2024-12-03T00:00:00Z"),
        ticketStartTime: new Date("2024-12-01T10:00:00Z"),
        ticketEndTime: new Date("2024-12-03T18:00:00Z")
      },
      {
        ticketName: "General Admission - Virtual Reality Expo 2024",
        qty: 2000,
        price: 100,
        ticketDescription: "General access to all VR exhibits and demo sessions.",
        ticketStartDate: new Date("2024-12-01T00:00:00Z"),
        ticketEndDate: new Date("2024-12-03T00:00:00Z"),
        ticketStartTime: new Date("2024-12-01T10:00:00Z"),
        ticketEndTime: new Date("2024-12-03T18:00:00Z")
      }
    ]
  },
  {
    name: "Art & Craft Fair 2024",
    image: "https://images.unsplash.com/photo-1593487812203-dff25b253f4c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDMyfHxhcnQlMjBjcmFmdHxlbnwwfHx8fDE2ODkzMjkwOTM&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-12T00:00:00Z"),
    endDate: new Date("2024-12-14T00:00:00Z"),
    startTime: new Date("2024-12-12T09:00:00Z"),
    endTime: new Date("2024-12-14T17:00:00Z"),
    location: "Art Center, New York",
    address: "500 Craft Rd, New York, NY",
    url: "https://artcraftfair2024.com",
    description: "A vibrant market filled with handmade crafts, art pieces, and interactive art workshops for all ages.",
    termsAndCondition: "No outside food or drinks allowed. Admission tickets valid for a single day only.",
    eventTicket: [
      {
        ticketName: "VIP Access - Art & Craft Fair 2024",
        qty: 100,
        price: 150,
        ticketDescription: "Priority access to exclusive workshops, meet artists, and early bird shopping.",
        ticketStartDate: new Date("2024-12-12T00:00:00Z"),
        ticketEndDate: new Date("2024-12-14T00:00:00Z"),
        ticketStartTime: new Date("2024-12-12T09:00:00Z"),
        ticketEndTime: new Date("2024-12-14T17:00:00Z")
      },
      {
        ticketName: "General Admission - Art & Craft Fair 2024",
        qty: 3000,
        price: 25,
        ticketDescription: "General entry to explore the crafts, art pieces, and public workshops.",
        ticketStartDate: new Date("2024-12-12T00:00:00Z"),
        ticketEndDate: new Date("2024-12-14T00:00:00Z"),
        ticketStartTime: new Date("2024-12-12T09:00:00Z"),
        ticketEndTime: new Date("2024-12-14T17:00:00Z")
      }
    ]
  },
  {
    name: "Innovation in Fashion Show 2024",
    image: "https://images.unsplash.com/photo-1560763594-64cc4b9cf2db?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZhc2hpb258ZW58MHx8fHwxNjg5MzMxNTI4&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-03T00:00:00Z"),
    endDate: new Date("2024-12-05T00:00:00Z"),
    startTime: new Date("2024-12-03T18:00:00Z"),
    endTime: new Date("2024-12-05T22:00:00Z"),
    location: "Fashion Arena, Milan",
    address: "500 Fashion Ave, Milan, Italy",
    url: "https://innovationfashionshow2024.com",
    description: "Experience the cutting-edge of fashion with top designers showcasing their most innovative collections.",
    termsAndCondition: "No photography during live fashion shows. VIP seating is limited.",
    eventTicket: [
      {
        ticketName: "VIP Access - Innovation in Fashion Show 2024",
        qty: 50,
        price: 600,
        ticketDescription: "Exclusive front-row seating, backstage access, and a meet-and-greet with designers.",
        ticketStartDate: new Date("2024-12-03T00:00:00Z"),
        ticketEndDate: new Date("2024-12-05T00:00:00Z"),
        ticketStartTime: new Date("2024-12-03T18:00:00Z"),
        ticketEndTime: new Date("2024-12-05T22:00:00Z")
      },
      {
        ticketName: "General Admission - Innovation in Fashion Show 2024",
        qty: 1000,
        price: 150,
        ticketDescription: "Access to all public fashion shows and exhibitions.",
        ticketStartDate: new Date("2024-12-03T00:00:00Z"),
        ticketEndDate: new Date("2024-12-05T00:00:00Z"),
        ticketStartTime: new Date("2024-12-03T18:00:00Z"),
        ticketEndTime: new Date("2024-12-05T22:00:00Z")
      }
    ]
  },
  {
    name: "International Travel Expo 2024",
    image: "https://images.unsplash.com/photo-1556742042-f6bb3281c2da?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGludGVybmF0aW9uYWwlMjB0cmF2ZWwlMjBleHBvfGVufDB8fHx8fDE2ODkzMzA4Mzg&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-06T00:00:00Z"),
    endDate: new Date("2024-12-08T00:00:00Z"),
    startTime: new Date("2024-12-06T09:00:00Z"),
    endTime: new Date("2024-12-08T18:00:00Z"),
    location: "Expo Center, London",
    address: "200 Travel Rd, London, UK",
    url: "https://internationaltravelexpo2024.com",
    description: "Meet travel experts, discover new destinations, and find the best travel deals at the premier global travel expo.",
    termsAndCondition: "All attendees must pre-register for ticket entry. Some exhibits may require additional fees.",
    eventTicket: [
      {
        ticketName: "VIP Access - International Travel Expo 2024",
        qty: 200,
        price: 350,
        ticketDescription: "Access to VIP lounges, exclusive travel deals, and priority seating at presentations.",
        ticketStartDate: new Date("2024-12-06T00:00:00Z"),
        ticketEndDate: new Date("2024-12-08T00:00:00Z"),
        ticketStartTime: new Date("2024-12-06T09:00:00Z"),
        ticketEndTime: new Date("2024-12-08T18:00:00Z")
      },
      {
        ticketName: "General Admission - International Travel Expo 2024",
        qty: 5000,
        price: 50,
        ticketDescription: "Access to all exhibitions, seminars, and travel-related sessions.",
        ticketStartDate: new Date("2024-12-06T00:00:00Z"),
        ticketEndDate: new Date("2024-12-08T00:00:00Z"),
        ticketStartTime: new Date("2024-12-06T09:00:00Z"),
        ticketEndTime: new Date("2024-12-08T18:00:00Z")
      }
    ]
  },
  {
    name: "Science and Innovation Symposium 2024",
    image: "https://images.unsplash.com/photo-1521747116042-d6b6b2de06a7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvc3RlciUyMHNjaWVudGlmaWMlMjBhbmQtc3BhY2V8ZW58MHx8fHwxNjg5MzI5ODg&ixlib=rb-1.2.1&q=80&w=1080",
    startDate: new Date("2024-12-15T00:00:00Z"),
    endDate: new Date("2024-12-16T00:00:00Z"),
    startTime: new Date("2024-12-15T09:00:00Z"),
    endTime: new Date("2024-12-16T17:00:00Z"),
    location: "Innovation Hall, Boston",
    address: "800 Science Ave, Boston, MA",
    url: "https://scienceinnovationsymposium2024.com",
    description: "Join leading scientists and innovators for discussions on breakthroughs in technology, health, and the environment.",
    termsAndCondition: "Symposium schedule subject to change. Pre-registration is required for some sessions.",
    eventTicket: [
      {
        ticketName: "VIP Access - Science and Innovation Symposium 2024",
        qty: 100,
        price: 500,
        ticketDescription: "Front-row seating at keynote sessions, exclusive networking events, and VIP lounge access.",
        ticketStartDate: new Date("2024-12-15T00:00:00Z"),
        ticketEndDate: new Date("2024-12-16T00:00:00Z"),
        ticketStartTime: new Date("2024-12-15T09:00:00Z"),
        ticketEndTime: new Date("2024-12-16T17:00:00Z")
      },
      {
        ticketName: "General Admission - Science and Innovation Symposium 2024",
        qty: 2000,
        price: 100,
        ticketDescription: "Access to all symposium sessions, networking opportunities, and exhibitions.",
        ticketStartDate: new Date("2024-12-15T00:00:00Z"),
        ticketEndDate: new Date("2024-12-16T00:00:00Z"),
        ticketStartTime: new Date("2024-12-15T09:00:00Z"),
        ticketEndTime: new Date("2024-12-16T17:00:00Z")
      }
    ]
  },
  {
    name: "International Film Festival 2025",
    image: "https://via.placeholder.com/1080x1080", // Replace with actual image URL
    startDate: new Date("2025-03-15T00:00:00Z"),
    endDate: new Date("2025-03-20T00:00:00Z"),
    startTime: new Date("2025-03-15T10:00:00Z"),
    endTime: new Date("2025-03-20T22:00:00Z"),
    location: "Grand Theater, Cannes",
    address: "1 Avenue de la République, Cannes, France",
    url: "https://filmfestivalcannes2025.com", //Replace with actual URL
    description: "A world-renowned film festival showcasing the best in cinema from around the globe.",
    termsAndCondition: "Tickets are non-refundable.  See website for full terms and conditions.",
    eventTicket: [
      {
        ticketName: "VIP Pass - International Film Festival 2025",
        qty: 200,
        price: 1000,
        ticketDescription: "Includes access to all screenings, VIP lounges, and special events.",
        ticketStartDate: new Date("2025-01-15T00:00:00Z"),
        ticketEndDate: new Date("2025-03-20T00:00:00Z"),
        ticketStartTime: new Date("2025-03-15T10:00:00Z"),
        ticketEndTime: new Date("2025-03-20T22:00:00Z")
      },
      {
        ticketName: "General Admission - International Film Festival 2025",
        qty: 5000,
        price: 150,
        ticketDescription: "Access to public screenings.",
        ticketStartDate: new Date("2025-01-15T00:00:00Z"),
        ticketEndDate: new Date("2025-03-20T00:00:00Z"),
        ticketStartTime: new Date("2025-03-15T10:00:00Z"),
        ticketEndTime: new Date("2025-03-20T22:00:00Z")
      }
    ]
  },
  {
    name: "Robotics & AI Conference 2025",
    image: "https://via.placeholder.com/1080x1080", // Replace with actual image URL
    startDate: new Date("2025-05-20T00:00:00Z"),
    endDate: new Date("2025-05-22T00:00:00Z"),
    startTime: new Date("2025-05-20T09:00:00Z"),
    endTime: new Date("2025-05-22T17:00:00Z"),
    location: "Convention Center, Tokyo",
    address: "1-1-1 Minato, Tokyo, Japan",
    url: "https://roboticsai2025.com", //Replace with actual URL
    description: "A leading conference exploring advancements in robotics and artificial intelligence.",
    termsAndCondition: "Registration is required. See website for cancellation policy.",
    eventTicket: [
      {
        ticketName: "Full Conference Pass - Robotics & AI Conference 2025",
        qty: 300,
        price: 750,
        ticketDescription: "Access to all sessions, workshops, and networking events.",
        ticketStartDate: new Date("2025-01-20T00:00:00Z"),
        ticketEndDate: new Date("2025-05-22T00:00:00Z"),
        ticketStartTime: new Date("2025-05-20T09:00:00Z"),
        ticketEndTime: new Date("2025-05-22T17:00:00Z")
      },
      {
        ticketName: "One-Day Pass - Robotics & AI Conference 2025",
        qty: 1000,
        price: 300,
        ticketDescription: "Access to sessions for one day only.",
        ticketStartDate: new Date("2025-01-20T00:00:00Z"),
        ticketEndDate: new Date("2025-05-22T00:00:00Z"),
        ticketStartTime: new Date("2025-05-20T09:00:00Z"),
        ticketEndTime: new Date("2025-05-22T17:00:00Z")
      }
    ]
  },
  {
    name: "Book Fair 2025",
    image: "https://via.placeholder.com/1080x1080", // Replace with actual image URL
    startDate: new Date("2025-07-10T00:00:00Z"),
    endDate: new Date("2025-07-13T00:00:00Z"),
    startTime: new Date("2025-07-10T10:00:00Z"),
    endTime: new Date("2025-07-13T18:00:00Z"),
    location: "Exhibition Hall, Frankfurt",
    address: "Messe Frankfurt, Frankfurt, Germany",
    url: "https://frankfurtbookfair2025.com", //Replace with actual URL
    description: "A major book fair featuring authors, publishers, and book lovers from around the world.",
    termsAndCondition: "Tickets are valid for the entire duration of the fair.",
    eventTicket: [
      {
        ticketName: "Author Meet & Greet - Book Fair 2025",
        qty: 50,
        price: 250,
        ticketDescription: "Includes a meet and greet with featured authors.",
        ticketStartDate: new Date("2025-05-10T00:00:00Z"),
        ticketEndDate: new Date("2025-07-13T00:00:00Z"),
        ticketStartTime: new Date("2025-07-10T10:00:00Z"),
        ticketEndTime: new Date("2025-07-13T18:00:00Z")
      },
      {
        ticketName: "General Admission - Book Fair 2025",
        qty: 10000,
        price: 50,
        ticketDescription: "Access to all exhibits and events.",
        ticketStartDate: new Date("2025-05-10T00:00:00Z"),
        ticketEndDate: new Date("2025-07-13T00:00:00Z"),
        ticketStartTime: new Date("2025-07-10T10:00:00Z"),
        ticketEndTime: new Date("2025-07-13T18:00:00Z")
      }
    ]
  },
  {
    name: "Sustainable Food Summit 2025",
    image: "https://via.placeholder.com/1080x1080", // Replace with actual image URL
    startDate: new Date("2025-09-10T00:00:00Z"),
    endDate: new Date("2025-09-12T00:00:00Z"),
    startTime: new Date("2025-09-10T09:00:00Z"),
    endTime: new Date("2025-09-12T17:00:00Z"),
    location: "Conference Center, Amsterdam",
    address: "RAI Amsterdam, Amsterdam, Netherlands",
    url: "https://sustainablefoodsummit2025.com", //Replace with actual URL
    description: "A summit dedicated to sustainable food systems and responsible agriculture.",
    termsAndCondition: "Refunds are not available.  See website for full terms.",
    eventTicket: [
      {
        ticketName: "VIP Delegate - Sustainable Food Summit 2025",
        qty: 100,
        price: 600,
        ticketDescription: "Includes priority seating, networking opportunities, and meals.",
        ticketStartDate: new Date("2025-07-10T00:00:00Z"),
        ticketEndDate: new Date("2025-09-12T00:00:00Z"),
        ticketStartTime: new Date("2025-09-10T09:00:00Z"),
        ticketEndTime: new Date("2025-09-12T17:00:00Z")
      },
      {
        ticketName: "Standard Delegate - Sustainable Food Summit 2025",
        qty: 500,
        price: 150,
        ticketDescription: "Access to all sessions and exhibits.",
        ticketStartDate: new Date("2025-07-10T00:00:00Z"),
        ticketEndDate: new Date("2025-09-12T00:00:00Z"),
        ticketStartTime: new Date("2025-09-10T09:00:00Z"),
        ticketEndTime: new Date("2025-09-12T17:00:00Z")
      }
    ]
  },
  {
    name: "Gaming Convention 2025",
    image: "https://via.placeholder.com/1080x1080", // Replace with actual image URL
    startDate: new Date("2025-11-25T00:00:00Z"),
    endDate: new Date("2025-11-27T00:00:00Z"),
    startTime: new Date("2025-11-25T10:00:00Z"),
    endTime: new Date("2025-11-27T18:00:00Z"),
    location: "Expo Center, Los Angeles",
    address: "1000 Game Ave, Los Angeles, CA",
    url: "https://gamingcon2025.com", //Replace with actual URL
    description: "A massive gaming convention with tournaments, exhibitors, and special guests.",
    termsAndCondition: "All sales final. No refunds.",
    eventTicket: [
      {
        ticketName: "VIP Gamer Pass - Gaming Convention 2025",
        qty: 200,
        price: 400,
        ticketDescription: "Includes priority access to events, exclusive merchandise, and meet-and-greets.",
        ticketStartDate: new Date("2025-09-25T00:00:00Z"),
        ticketEndDate: new Date("2025-11-27T00:00:00Z"),
        ticketStartTime: new Date("2025-11-25T10:00:00Z"),
        ticketEndTime: new Date("2025-11-27T18:00:00Z")
      },
      {
        ticketName: "General Admission - Gaming Convention 2025",
        qty: 5000,
        price: 75,
        ticketDescription: "Access to all exhibits, tournaments, and events.",
        ticketStartDate: new Date("2025-09-25T00:00:00Z"),
        ticketEndDate: new Date("2025-11-27T00:00:00Z"),
        ticketStartTime: new Date("2025-11-25T10:00:00Z"),
        ticketEndTime: new Date("2025-11-27T18:00:00Z")
      }
    ]
  }
];

async function main() {
  // Hash passwords and create creators
  const creatorRecords = [];
  for (const creator of creators) {
    const hashedPassword = await hashPassword(creator.password);
    const createdCreator = await prisma.creator.create({
      data: {
        email: creator.email,
        password: hashedPassword,
      },
    });
    creatorRecords.push(createdCreator);
  }

  // Assign creators to events (1:1 mapping)
  for (let i = 0; i < events.length; i++) {
    const creator = creatorRecords[i % creatorRecords.length]; // Round-robin if creators < events
    const event = events[i];

    // Create the event and associate it with the creator
    await prisma.event.create({
      data: {
        name: event.name,
        image: event.image,
        startDate: event.startDate,
        endDate: event.endDate,
        startTime: event.startTime,
        endTime: event.endTime,
        location: event.location,
        address: event.address,
        url: event.url,
        description: event.description,
        termsAndCondition: event.termsAndCondition,
        creatorId: creator.id, // Associate event with creator
        eventTicket: {
          create: event.eventTicket, // Nested creation of tickets
        },
      },
    });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


// // Seed creators and events
// const seedData = async () => {
//   try {
//     // Create creators and hash their passwords
//     const creators = await Promise.all(
//       creator.map(async (creator) => {
//         const hashedPassword = await hashPassword(creator.password);
//         return prisma.creator.create({
//           data: {
//             email: creator.email,
//             password: hashedPassword,
//           },
//         });
//       })
//     );

//     // For each event, create the event and its related tickets
//     for (let event of eventTicket) {
//       const creator = creators.find((creator) => creator.email === event.creatorId);
      
//       const createdEvent = await prisma.event.create({
//         data: {
//           name: event.name,
//           image: event.image,
//           startDate: event.startDate,
//           endDate: event.endDate,
//           startTime: event.startTime,
//           endTime: event.endTime,
//           location: event.location,
//           address: event.address,
//           url: event.url,
//           description: event.description,
//           termsAndCondition: event.termsAndCondition,
//           creatorId: creator.id, // Ensure creator ID is correctly mapped
//           eventTicket: {
//             create: event.eventTicket,
//           },
//         },
//       });
//       console.log(`Event ${createdEvent.name} created successfully.`);
//     }
//   } catch (error) {
//     console.error("Error seeding data:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// seedData();
