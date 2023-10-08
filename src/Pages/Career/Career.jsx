import { useLoaderData } from "react-router-dom";
import CareerCard from "./CareerCard";

const Career = () => {
  const jobs = useLoaderData();

  
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr className="bg-orange-600 text-lg text-center text-white">
            <th>Job Name</th>
            <th>Required Skills</th>
            <th>Education</th>
            <th>Salary /mo</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <CareerCard key={job.id} job={job} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Career;
