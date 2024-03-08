// BirthdayCard.js
import React, { useRef } from "react";
import { Button } from "@mui/material";
import {
  Card,
  CardContent,
  Typography,
  Container,
  CardMedia,
} from "@mui/material";
import html2canvas from "html2canvas";

const BirthdayCard = ({ data }) => {
  const cardRef = useRef(null);

  const downloadImage = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        useCss: true,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "birthday_card.png";
        link.click();
      });
    }
  };
  return (
    <Container className="formContainer">
      <div class="main" ref={cardRef}>
        <div class="container">
          <div class="container-card">
            <div class="left-container-card">
              {data.image && (
                <CardMedia
                  component="img"
                  className="image-item"
                  alt="Uploaded Image"
                  height="200" // Set the fixed height here
                  width="300" // Set the fixed width here
                  image={URL.createObjectURL(data.image)}
                  style={{ objectFit: "cover", width: "unset" }} // Maintain the aspect ratio
                />
              )}
            </div>
            <div class="right-container-card" >
              <h1>જન્મદિવસની હાર્દિક શુભેચ્છા</h1>
              <p>
                {data.name} ગામ – {data.village}
              </p>
              <p>
                આપના જન્મદિવસ નિમિત્તે શ્રી {data.fatherName} તરફથી શ્રી ગોપાલ
                ગૌશાળાને ₹ {data.amount} આપવા બદલ શ્રી ગૌશાળા સમિતિ આપ
                દાતાશ્રીનો ખુબ ખુબ આભાર વ્યક્ત કરે છે. અને જન્મદિવસની અઢળક
                શુભકામનાઓ પાઠવે છે.
              </p>
              <div class="credit">
                શ્રી ગોપાલ ગૌશાળા ટ્રસ્ટ ખાગેશ્રી - ૯૯૨૪૮ ૧૧૨૧૧
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={downloadImage}
        style={{ marginTop: "10px" }}
      >
        Download Image
      </Button>
    </Container>
  );
};

export default BirthdayCard;
