const CareerCard = ({ job }) => {

    const { id, name, description, salary, requiredSkills, requiredEducation } = job;
  
    
    return (
      <tr>
        <td>
          <h3 className="font-bold">{name}</h3>
        </td>
        <td>
          <h4>{requiredSkills}</h4>
        </td>
        <td>
          <h4>{requiredEducation}</h4>
        </td>
        <td>
          <h4>BDT {salary}</h4>
        </td>
      </tr>
    );
  };
export default CareerCard;
