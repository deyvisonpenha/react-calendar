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
  height: 100%;
  align-content: space-between;
  max-height: 190px
`;

export const Event = styles.div`
  display: flex;
  flex-direction: column;
  text-aling: center;
  overflow: auto;
  max-height: 190px
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

export const HeaderStyle = styles.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .select-month{
    strong{
      margin: 0 10px;
    }
  }
`;