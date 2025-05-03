import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function Cards(props) {
  const { productItem } = props;

  const isAvailable = productItem.availabilityStatus === "In Stock";

  return (
    <Card style={{ width: '18rem' }} className="h-100 d-flex flex-column position-relative">
      
      {/* البادج على الصورة */}
      <Badge 
        bg={isAvailable ? "success" : "danger"} 
        className="position-absolute top-0 start-0 m-2"
      >
        {productItem.availabilityStatus}
      </Badge>

      {/* الصورة */}
      <Card.Img 
        variant="top" 
        src={productItem.images[0]} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />

      <Card.Body className="d-flex flex-column flex-grow-1">
        
        {/* العنوان */}
        <Card.Title 
          className="text-center" 
          style={{ fontSize: '1rem', minHeight: '3rem', overflow: 'hidden' }}
        >
          {productItem.title}
        </Card.Title>

        {/* الوصف */}
        <Card.Text 
          className="flex-grow-1" 
          style={{ fontSize: '0.9rem', minHeight: '6rem', overflow: 'hidden' }}
        >
          {productItem.description || "No description available."}
        </Card.Text>

        {/* السعر */}
        <Card.Text 
          className="text-center" 
          style={{ fontWeight: 'bold', fontSize: '1rem', minHeight: '2rem' }}
        >
          ${productItem.price}
        </Card.Text>

        {/* الزرار */}
        <Button variant="primary" className="mt-auto w-100">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
