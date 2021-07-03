import Layout from "app/core/layouts/Layout"
import getCurrentUser from "app/users/queries/getCurrentUser"
import { useQuery } from "blitz"
import { Suspense } from "react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Dashboard = () => {
  const [user] = useQuery(getCurrentUser, { test: true })
  console.log("user", user)

  return <div>Dashboard</div>
}

Dashboard.authenticate = true

Dashboard.getLayout = (page) => (
  <Suspense fallback={<div> custom loading...</div>}>
    <Layout title="Dashboard">{page}</Layout>
  </Suspense>
)

export default Dashboard
