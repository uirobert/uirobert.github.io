import { ExternalLinkIcon } from '@heroicons/react/20/solid';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import PDFVid from './PDFVid';
import Container from './Container';
Container

export default function PDFTALK() {
  return (

   


    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">


      <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">PDF Master- A Side Project</h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
    The POC will harness the capabilities of Python and the ChatGPT API, offering a unique opportunity to gain hands-on experience in technical development while simultaneously crafting an intuitive user interface. 
      </p>
    </div>
  </div>




        {/* Project Overview Section */}
        <div className="mt-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Project Overview</h2>
          <div className="mt-4 text-lg leading-8 space-y-6">
            <p>
           The goal of this project PDF Master is to enhance skills in both product management and engineering by creating a proof of concept (POC). This POC will leverage Python and the ChatGPT API. The project aims to provide practical experience in technical development 
           and designing a user-friendly interface for the POC.
            </p>
            <p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Role</h2>
           In the context of this side project, I took on the roles of both Product Manager and Engineer. My responsibilities included overseeing
            the app's development and deployment while also actively contributing to the technical development. The goal 
            was a POC leveraging various technologies to build a PDF-based chatbot that could be 
            used to converse with the user.
           
            </p>
            <p>
              {/* Timeline:  Months (June 2023 - August 2023) */}
            </p>
            <p>
           {/* The primary challenge was upgrading the app to a more efficient version without disrupting access to critical union information. It was essential to maintain uninterrupted service, ensure compatibility of existing functionalities, and handle
               the transition of a diverse user base to the new version without any loss of data or functionality. */}
            </p>
            {/* <img
              className="mt-6 rounded-xl object-cover max-w-lg"
              src="https://images.unsplash.com/photo-of-ux-design-concept"
              alt="Project Overview"
            /> */}
          </div>
        </div>

        {/* Problem Statement Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Problem</h2>
          <div className="mt-4 text-lg leading-8 space-y-6">
            <p>
            Handling PDF documents to talk to an AI LLM efficiently is a common challenge faced by individuals and businesses.
             
            </p>
            <p>
              {/* Impact: This issue led to decreased conversion rates and overall revenue. */}
            </p>
            <p>
              {/* Goal: Redesign the checkout process to be more intuitive and efficient, reducing cart abandonment rate by 30% in 3 months. */}
            </p>
          </div>
        </div>

        {/* Goals and Objectives Section */}
      

        
           
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">  Specific Challenges</h2>
              <div className="mt-4 text-lg leading-8 space-y-6">

   

    Efficiently parsing and extracting content from one or more PDF documents.
    Developing an AI-driven system capable of generating contextually relevant questions from the content.
    Ensuring the questions generated are accurate and useful for users.
    Providing a user-friendly interface for uploading and managing multiple PDFs.


    
   
</div>

<div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Demo</h2>
          <div className="mt-4 text-lg leading-8 space-y-6">
       

<center>
<iframe src="https://player.vimeo.com/video/902842282?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="600" height="600" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="AI-Powered PDF Conversation App"></iframe>
</center>
          </div>





        </div>

        {/* Additional sections should follow a similar structure... */}

      </div>
    </div>
  );
}
