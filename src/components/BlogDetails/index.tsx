import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title={"Blog Details"} pages={["blog details"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[750px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="rounded-[10px] overflow-hidden mb-7.5">
            <Image
              className="rounded-[10px]"
              src="/images/blog/blog-details-01.jpeg"
              alt="details"
              width={750}
              height={477}
            />
          </div>

          <div>
            <span className="flex items-center gap-3 mb-4">
              <a href="#" className="ease-out duration-200 hover:text-blue">
                Mar 27, 2022
              </a>

              {/* <!-- divider --> */}
              <span className="block w-px h-4 bg-gray-4"></span>

              <a href="#" className="ease-out duration-200 hover:text-blue">
                300k Views
              </a>
            </span>

            <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
            📍 Lahore Chamber of Commerce & Industry
            </h2>

            <p className="mb-6">
            A valuable business meeting was held at the Lahore Chamber of Commerce & Industry (LCCI), bringing together members of the business community.
            Butt Three Star Trading Company was honoured to be part of the gathering, guided by:
            </p>

            <p className="mb-6">
            🔹 Mr. Fahim-ur-Rehman Sehgal – President, LCCI,<br></br>
            🔹 Mr. Lodhi – Vice President, LCCI<br></br>
            🔹 Mr. Shoaib Ayub Batalvi – Chairman, yung Exporters Association
            </p>

            <p>
            The event featured valuable business introductions and networking among attendees, followed by a group photograph to mark the occasion.

            We are grateful for platforms such as LCCI that continue to strengthen ties within Pakistan’s trade and export community.

            “A Trusted Name in International Trading & Export.”
            </p>

           
  
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
