import Image from "next/image";
import styles from "./page.module.scss";

import HelloText from "@/app/(components)/HelloText";
import apiTemp from "@/service/domain/api-temp";
import Button from "@/app/(components)/ButtonComp";

async function fetchSomething() {

  const result = await apiTemp.getTodos();
  return result;
}

export default async function Home() {
  const result = await fetchSomething();

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {result.map((item: any) => (
          <div key={item.id}>
            <Button primary={true} label={item.firstName} />
          </div>
        ))}

        <HelloText />
      </main>

    </div>
  );
}
