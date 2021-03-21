import styles from 'styled-components'

export const Container = styles.div`
  margin: 1rem;

  h1 {
    margin-bottom: 2rem;
  }
`;

export const Cell = styles.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  button{
    width: 25%;
    display: flex;
    position: end;
  }
`