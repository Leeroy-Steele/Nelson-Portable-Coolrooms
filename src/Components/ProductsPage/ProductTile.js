import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function ProductTile({
  imgURL,
  title,
  subTitle,
  text,
  text1,
  text3,
  uListItems,
}) {
  return (
    <>
      <Card className="m-0" border="light">
        <NavLink
          to={`/product?productTitle=${title}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img variant="top" src={imgURL} />

          <Card.Body>
            <Card.Text className="text-black text-center text-decoration-none">
              {title}
            </Card.Text>
          </Card.Body>
        </NavLink>
      </Card>
      <br />
    </>
  );
}

export default ProductTile;
