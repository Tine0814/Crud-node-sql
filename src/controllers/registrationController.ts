import { Request, Response } from "express";
import dbConnection from "../configs/db.config";

const registrationController = {
  insertRegistration: (req: Request, res: Response) => {
    const {
      fullName,
      workEmail,
      companyName,
      phoneNumber,
      companySize,
      country,
    } = req.body;
    if (!fullName) {
      res.status(400).send("full name is required.");
      return;
    } else if (!workEmail) {
      res.status(400).send("workEmail is required.");
      return;
    } else if (!companyName) {
      res.status(400).send("companyName is required.");
      return;
    } else if (!phoneNumber) {
      res.status(400).send("phoneNumber is required.");
      return;
    } else if (!country) {
      res.status(400).send("country is required.");
      return;
    }

    let verified = false;

    dbConnection.query(
      "INSERT INTO client (full_name, work_email, company_name, phone_number, company_size, country, verified) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        fullName,
        workEmail,
        companyName,
        phoneNumber,
        companySize,
        country,
        verified,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error inserting client");
          return;
        }

        res.send(result);
      }
    );
  },
  selectAllRegistration: (req: Request, res: Response) => {
    dbConnection.query("SELECT * FROM client", (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error fetching client");
        return;
      }

      res.send(rows);
    });
  },
};

export default registrationController;
