import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hacer scroll suave hasta arriba
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!visible) return null;

  return (
    <Fab aria-label="Back to top" onClick={handleClick}>
      <svg
        className="svgIcon"
        viewBox="0 0 384 512"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fill="white"
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>

      <span className="label">Back to Top</span>
    </Fab>
  );
}

const Fab = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 999; /* por encima del contenido */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #0a1e3f;
  border: none;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25),
    0 0 0 4px rgba(242, 251, 212, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;

  .svgIcon {
    transition: 0.3s ease;
  }

  /* Tooltip animado como tenías */
  &::before {
    content: "Back to Top";
    position: absolute;
    bottom: -20px;
    color: #fff;
    font-size: 0;
    transition: 0.3s ease;
  }

  &:hover {
    width: 140px;
    border-radius: 50px;
    background: #0a1e3f;
    gap: 8px;

    .svgIcon {
      transform: translateY(-200%);
    }
    &::before {
      font-size: 13px;
      bottom: unset;
    }
  }

  .label {
    display: none;
  } /* oculto para screen readers ya hay aria-label */

  @media (max-width: 640px) {
    right: 16px;
    bottom: 16px;
    &:hover {
      width: 56px;
      border-radius: 50%;
    }
    &::before {
      display: none;
    }
  }
`;
