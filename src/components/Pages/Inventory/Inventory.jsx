import { useEffect, useState } from "react";
// import NotFound from '../Routes/NotFound'
import { useNavigate } from "react-router";
import { Table } from "react-bootstrap";
import "./InventoryStyle.scss";
import { Button, Container, Card } from "react-bootstrap";
import { Switch } from "@mui/material";
import ResetLogo from "../../images/Reset.png";

const Home = () => {
  const navigate = useNavigate();
  let [authToken, setAuthToken] = useState("");
  const getAuthToken = () => {
    setAuthToken(localStorage.getItem("authToken"));
  };

  useEffect(() => {
    getAuthToken();
  }, []);
  const dummylist = [
    {
      ID: "Hi - user -1",
      Fullname: "Nguyen Van Bao Khuong",
      Password: "ASD@JB78",
      Email: "khuong@gmail.com",
      Status: "Active",
    },
    {
      ID: "Hi - user -2",
      Fullname: "John Doe",
      Password: "P@ssw0rd",
      Email: "johndoe@example.com",
      Status: "Disable",
    },
    {
      ID: "Hi - user -3",
      Fullname: "Jane Smith",
      Password: "Secret123",
      Email: "janesmith@example.com",
      Status: "Active",
    },
    {
      ID: "Hi - user -4",
      Fullname: "Alice Johnson",
      Password: "Pass123!",
      Email: "alicejohnson@example.com",
      Status: "Disable",
    },
    {
      ID: "Hi - user -5",
      Fullname: "Bob Anderson",
      Password: "B0bPassw0rd",
      Email: "bobanderson@example.com",
      Status: "Active",
    },
    {
      ID: "Hi - user -6",
      Fullname: "Emily Taylor",
      Password: "EmiPass123",
      Email: "emilytaylor@example.com",
      Status: "Disable",
    },
    {
      ID: "Hi - user -7",
      Fullname: "Michael Brown",
      Password: "Brownie456",
      Email: "michaelbrown@example.com",
      Status: "Active",
    },
    {
      ID: "Hi - user -8",
      Fullname: "Samantha Wilson",
      Password: "SammyPass!",
      Email: "samanthawilson@example.com",
      Status: "Disable",
    },
    {
      ID: "Hi - user -9",
      Fullname: "David Lee",
      Password: "LeePass321",
      Email: "davidlee@example.com",
      Status: "Active",
    },
  ];

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return authToken !== "" && authToken !== null ? (
    <Container id="BodyContent" style={{ marginTop: "10rem" }}>
      <div className=" mb-3">
          {/* <Button variant="warning">Model</Button>
          <Button variant="warning">License</Button> */}
          <Switch onClick={toggler} />
          {toggle ? (
            <Button variant="warning">License</Button>
          ) : (
            <Button variant="warning">Model</Button>
          )}

      </div>

      <Card className="rounded-0 Box" bg="dark" text="light">
        <Card.Body>
          <Card.Title>
            <i className="fa-solid fa-filter" /> Filter
          </Card.Title>
          <hr />
          <Card.Text className="d-flex justify-content-center inputField-Inventory">
            <div>
              <label>
                <strong>Model Name</strong>
              </label>
              <input
                className="form-control"
                placeholder="Enter model name"
                onChange={(event) => handleSearch(event)}
              />
            </div>
            <div>
              <label>
                <strong>Brand name</strong>
              </label>
              <input
                className="form-control"
                placeholder="Enter brand name"
                onChange={(event) => handleSearch(event)}
              />
            </div>
            <div>
              <strong>Product line</strong>
              <input
                className="form-control"
                placeholder="Enter product line"
                onChange={(event) => handleSearch(event)}
              />
            </div>
            <div>
              <strong>Type</strong>
              <input
                className="form-control"
                placeholder="Enter type"
                onChange={(event) => handleSearch(event)}
              />
            </div>
            <div className="d-flex justify-content-end mt-4">
            <Button variant="warning" className="me-3 rounded-0">
              <i className="fa-solid fa-magnifying-glass" />
              <strong>Search</strong>
            </Button>
            <Button variant="warning" className="rounded-0">
              <img src={ResetLogo} alt="" height={22} />
              <strong>Reset</strong>
            </Button>
          </div>
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Table striped bordered hover variant="dark" className="mt-4 text-center">
        <thead>
          <tr>
            <th>Model Name</th>
            <th>Brand Name</th>
            <th>Product Line</th>
            <th>Quantity</th>
            <th>In stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummylist.map((user, index) => (
            <tr key={`Hisoft Co. Staff ${index}`}>
              <td>
                <p>{user.ID}</p>
              </td>
              <td>
                <p>{user.Fullname}</p>
              </td>
              <td>
                <p>Empty</p>
              </td>
              <td>
                <p>{user.Password}</p>
              </td>
              <td>
                <p>{user.Email}</p>
              </td>
              <td>
                <Button variant="warning" className="px-4 mx-3 rounded-0">
                  Create a request
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  ) : (
    navigate("/")
  );
};

export default Home;
