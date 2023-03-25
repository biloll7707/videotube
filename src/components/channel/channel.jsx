import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";


const Channel = () => {
    const params = useParams()
    console.log(params)
  return (
    <Link to={'/'}>
      <Button variant="contained">Back</Button>
    </Link>
  );
};

export default Channel;
