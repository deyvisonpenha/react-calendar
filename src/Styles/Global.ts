import styles from 'styled-components'

export const Container = styles.div`
  margin: 1rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const Cell = styles.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  align-content: space-between;
  max-height: 190px
`;

export const Event = styles.div`
  display: flex;
  flex-direction: row;
  text-aling: center;
  overflow: auto;
  max-height: 100px
`;

export const Today = styles.div`
  display: inline-block;
  border-radius: 50%;
  background-color: red;
  height: 20px;
  width: 25px;
  margin-bottom: 8px;

    p{
      padding: 0 5px;
      text-aling: center;
    }
`;

export const HeaderDay = styles.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 10px 10px 10px;
    align-items: baseline;
`

export const ColorList = styles.div`
  display: flex;

  label{
    margin-right: 10px;
  }


`

export const Modal = styles.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position:fixed;
    background: white;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  
  .display-block {
    background: rgba(0, 0, 0, 0.6);
    display: block;
  }
  
  .display-none {
    display: none;
  }
`;