import React from "react";
import { Button } from "../button";
import { Input } from "../input";
import { H2 } from "../headings";
import { ServiceLogo } from "./service-logo";
import Router from "next/router";

import styles from "./index.module.scss";

export const AddService = () => {
  const [companyName, setCompanyName] = React.useState<string>("");

  const addCompany = () => {
    if (companyName) {
      const loadedServices = localStorage.getItem("services");

      const services: string[] = loadedServices
        ? JSON.parse(loadedServices)
        : [];
      services.push(companyName);

      const updatedServices = JSON.stringify(services);
      localStorage.setItem("services", updatedServices);

      Router.push("/profile");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <H2>Applications</H2>
      </div>
      <div className={styles.form}>
        <div className={styles.logoWrapper}>
          <ServiceLogo />
        </div>
        <div className={styles.inputWrapper}>
          <Input onChange={setCompanyName} placeholder="numele companiei" />
        </div>
        <div className={styles.btnsRow}>
          <div className={styles.btnWrapper}>
            <Button onClick={addCompany} disabled={!companyName}>
              adăugare
            </Button>
          </div>
          <div className={styles.btnWrapper}>
            <Button onClick={() => Router.push("/profile")} kind="outline">
              anulați
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
