import styled from "styled-components";

export const HomeWrapper = styled.div`
  .slick-arrow {
    background-color: #3C948B;
    height: 35px;
    width: 35px;
    border-radius: 100px;
  }
  .slick-arrow:hover,
  .slick-arrow:active,
  .slick-arrow:focus {
    background-color: #3C948B !important;
  }
`;
export const NavWrapper = styled.div`
  background-color: #fdb73b;
  font-family: "Poppins", sans-serif;
  form {
    background-color: #fff;
    margin-left: 40px;
    height: 40px;
    padding: 0 20px;
    border-radius: 100px;
    input {
      border: none;
    }
    input:focus {
      box-shadow: none;
    }
  }
  .nav-link {
    color: #000 !important;
  }
`;
