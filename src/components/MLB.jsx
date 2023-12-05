import { ExternalLinkIcon } from '@heroicons/react/20/solid';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'




export default function MLB() {
  return (

    

    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">
        
        {/* Problem Identification Section */}
        <div className="mt-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Identifying the Core Problem</h2>
          <div className="mt-4 text-lg leading-8 space-y-6">
            <p>
              The AI-enhanced CRM system was developed in response to a critical challenge faced by tradespeople: efficiently managing and responding to leads. Initially, our research team undertook a thorough analysis of market trends and user behaviors. We discovered that while tradespeople were receiving a substantial number of leads, there was a significant gap in their response rate. 
            </p>
            <p>
              This issue was multi-faceted. Firstly, many leads were not adequately qualified, leading to a mismatch between the tradespeople's skills and the job requirements. Secondly, the overwhelming volume of leads, coupled with the busy schedules of these professionals, meant that many leads were overlooked or lost in the shuffle. To understand this problem more deeply, we conducted interviews with a variety of tradespeople and gathered data from our existing CRM system. We analyzed patterns in lead response times and correlated them with factors such as time of day, lead quality, and the specific trade of the professional.
            </p>
            <p>
              Through data analytics, we found that leads received during peak working hours had the lowest response rates. Many tradespeople expressed frustration at the difficulty of managing leads while on the job. It became clear that a solution was needed that could not only filter and qualify leads more effectively but also present them to tradespeople in a manageable and user-friendly manner. The goal was to create a system that could increase the efficiency of lead management, thereby improving response rates and ultimately leading to higher customer satisfaction and better business outcomes for tradespeople.
            </p>
          </div>
          <img
            className="mt-6 rounded-xl object-cover max-w-lg"
            src="https://images.unsplash.com/photo-1559526324-593bc073d938"
            alt="Problem Identification"
          />
        </div>

        {/* Solution Ideation Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Brainstorming Solutions with AI</h2>
          <div className="mt-4 text-lg leading-8 space-y-6">
            <p>
              The ideation phase for the AI-enhanced CRM system was a collaborative and creative process, employing a combination of design thinking, brainstorming sessions, and technology workshops. Our team comprised AI experts, UX designers, CRM analysts, and representatives from the tradespeople community. 
            </p>
            <p>
              The primary objective was to ideate a solution that would address the core problem effectively. We started with a series of workshops to define the specific requirements of the system. The workshops included activities like empathy mapping to understand the tradespeople's day-to-day challenges, and user story mapping to prioritize features based on their needs. 
            </p>
            <p>
              One of the key ideas that emerged was the use of AI to automate the lead qualification process. The AI system could analyze incoming leads in real-time, filter them based on predetermined criteria such as location, job complexity, and tradesperson’s expertise, and rank them in order of relevance. Another significant concept was the development of an intuitive user interface that could seamlessly integrate with the tradespeople's existing workflows. The idea was to create a mobile-friendly CRM system that could send alerts for high-priority leads, allow for quick response actions, and provide an easy-to-navigate dashboard for lead management.
            </p>
            <p>
              Through iterative brainstorming sessions and leveraging AI technology, we envisioned a CRM system that not only streamlined lead management but also adapted to the unique working patterns of tradespeople. This phase set the foundation for the subsequent design and development of the AI-enhanced CRM system, marking a significant step towards transforming the lead management process.
            </p>
          </div>
          <img
            className="mt-6 rounded-xl object-cover max-w-lg"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Solution Ideation"
          />
        </div>

        {/* Additional sections should follow a similar structure... */}

      </div>
    </div>
  );
}
