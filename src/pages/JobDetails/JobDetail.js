import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetail = ({ name }) => {
	const { id } = useParams();
	console.log("eyedee", id);
	const getDetailData = async () => {
		const url = `http://localhost:5001/jobs/${id}`;
		const response = await fetch(url);
		const data = await response.json();
		console.log("detail", data);
	};
	useEffect(() => {
		getDetailData();
	});
	return (
		<div>
			<h1>Details</h1>
			<h1>{name}</h1>
		</div>
	);
};

export default JobDetail;
