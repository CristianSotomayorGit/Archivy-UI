import React, { useState } from "react";

interface ButtonProps {
  initialColor?: string;
  hoverColor?: string;
  text?: string;
}

const AIWarning: React.FC<ButtonProps> = ({
  initialColor,
  hoverColor,
  text,
}) => {
  //   const [color, setColor] = useState<string>(initialColor);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-title-container">
          <h1 className="modal-title">Archivy</h1>
        </div>
        <div
          className="modal-box-container"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div className="warning-section">
            <h3>Prompt It 💬</h3>
            <p>
              Pose your questions about building codes, construction permits,
              and compliance requirements.
            </p>
          </div>
          <div className="warning-section">
            <h3>Protect Info ⛔</h3>
            <p>
              Keep your personal data and confidential project details secure
              when seeking advice.
            </p>
          </div>
          <div className="warning-section">
            <h3>Verify Results 🔎</h3>
            <p>
              Verify the building regulations and code interpretations provided
              with local authorities to ensure accuracy.
            </p>
          </div>
        </div>
        <div>
          <button id="myBtn">Okay</button>
        </div>
      </div>
    </div>
  );
};

export default AIWarning;
