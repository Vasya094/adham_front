import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();

  // useEffect(() => {

  // })

  return (
    <>
      <section className='heading'>
        <h1><strong>{t("app_name")}</strong></h1>
        <p>Goals Dashboard</p>
      </section>

      <section className='content'>
          <h3>You have not set any goals</h3>
      </section>
    </>
  )
}

export default Dashboard


