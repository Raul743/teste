import { FC, useEffect, useState } from "react";
import { getPerson } from "../../utils/graphQL/queries";
// import { Container } from './styles';
import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap";
import Link from "next/link";
import { transactionsType } from "../../client/components/Dashboard-default/LatestTranaction/types";
const LatestTranaction: FC = () => {
  const transactions = [
    {
      id: "customCheck2",
      orderId: "#SK2540",
      billingName: "Neal Matthews",
      Date: "07 Oct, 2019",
      total: "$400",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      link: "#",
    },
    {
      id: "customCheck3",
      orderId: "#SK2541",
      billingName: "Jamal Burnett",
      Date: "07 Oct, 2019",
      total: "$380",
      badgeClass: "danger",
      paymentStatus: "Chargeback",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      link: "#",
    },
    {
      id: "customCheck4",
      orderId: "#SK2542",
      billingName: "Juan Mitchell",
      Date: "06 Oct, 2019",
      total: "$384",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
    {
      id: "customCheck5",
      orderId: "#SK2543",
      billingName: "Barry Dick",
      Date: "05 Oct, 2019",
      total: "$412",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      link: "#",
    },
    {
      id: "customCheck6",
      orderId: "#SK2544",
      billingName: "Ronald Taylor",
      Date: "04 Oct, 2019",
      total: "$404",
      badgeClass: "warning",
      paymentStatus: "Refund",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      Date: "04 Oct, 2019",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
  ];
  const [person, setPerson] = useState<[]>([]);
  async function getData() {
    setPerson(await getPerson());
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log("raul ====>", person);
  }, [person]);
  type Person = {
    name: string;
    id: string;
  };
  type PersonNode = {
    node?: Person;
  };
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">Todas as contas</CardTitle>
        <div className="table-responsive">
          <table className="table align-middle table-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th style={{ width: "20px" }}>
                  <div className="form-check font-size-16 align-middle">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck1"
                    />
                    <label className="form-check-label" htmlFor="customCheck1">
                      &nbsp;
                    </label>
                  </div>
                </th>
                <th className="align-middle">Order ID</th>
                <th className="align-middle">Conta</th>
                <th className="align-middle">Date</th>
                <th className="align-middle">Total</th>
                <th className="align-middle">Payment Status</th>
                <th className="align-middle">Payment Method</th>
                <th className="align-middle">View Details</th>
              </tr>
            </thead>
            <tbody>
              {person.map((persons: PersonNode, key) => (
                <tr key={"_tr_" + key}>
                  <td>
                    <div className="form-check font-size-16">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={persons?.node?.id}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={persons?.node?.name}
                      >
                        &nbsp;
                      </label>
                    </div>
                  </td>
                  <td>
                    <Link href="#">
                      <a className="text-body fw-bold"> {key} </a>
                    </Link>{" "}
                  </td>
                  <td>{persons?.node?.name}</td>
                  <td>{"23/03/2021"}</td>
                  <td>{503 * key}</td>
                  <td>
                    <Badge
                      className={"font-size-11 badge-soft-success"}
                      color="success"
                      pill
                    >
                      {"Paid"}
                    </Badge>
                  </td>
                  <td>
                    <i className={"fab fa-cc-mastercard me-1"}></i>{" "}
                    {"Mastercard"}
                  </td>
                  <td>
                    <Button
                      type="button"
                      color="primary"
                      size="sm"
                      className="btn-rounded waves-effect waves-light"
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default LatestTranaction;
