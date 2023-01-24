import React from "react";
import { Button } from "../button";
import { H2 } from "../headings";
import Router from "next/router";
import { ServiceLogo } from "./service-logo";
import { DemoLogo } from "./demo-logo";

import styles from "./index.module.scss";

export const MyServices = () => {
  const [services, setServices] = React.useState<string[]>([]);

  React.useEffect(() => {
    const loadedServices = localStorage.getItem("services");
    if (loadedServices) {
      const services: string[] = JSON.parse(loadedServices);
      setServices(services);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <H2>Serviciile mele</H2>
        <div className={styles.btnWrapper}>
          <Button
            onClick={() => Router.push("/profile/add-service")}
            kind="outline"
          >
            + Adăugare
          </Button>
        </div>
      </div>

      <div  className={styles.row}>
        <div className={styles.list}>
          {services.map((s, i) => (
            <div key={i} className={styles.item}>
              <ServiceLogo />
              <p>{s}</p>
            </div>
          ))}
        </div>

        <div className={styles.demoWrapper}>
          <DemoLogo />
        </div>
      </div>
    </div>
  );
};
