import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import moment from "moment";
import Badge from "react-bootstrap/Button";
import "./style.css";
import { useHistory, useLocation } from "react-router-dom";

const Job = () => {
	const [jobList, setJobList] = useState([]);
	const history = useHistory();
	let query = useQuery();
	const QUERYSTR_PREFIX = "q";
	const [keyword, setKeyWord] = useState(query.get(QUERYSTR_PREFIX));
	const [originalJobs, setOriginalJobs] = useState([]);

	const onSearch = (event) => {
		setKeyWord(event.target.value);
		console.log("words", event.target.value);
	};

	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	const handleSearch = (e) => {
		let filteredJobs = originalJobs;
		if (e) {
			e.preventDefault();
			history.push(`/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
		}
		if (keyword) {
			console.log("yere");
			filteredJobs = originalJobs.filter((job) =>
				job.title.toLowerCase().includes(keyword.toLowerCase())
			);
		}
		setJobList(filteredJobs);
	};

	useEffect(() => {
		handleSearch();
	}, [originalJobs]);
	const getJobData = async () => {
		try {
			const url = `http://localhost:5001/jobs/`;
			const response = await fetch(url);
			const data = await response.json();
			console.log("data", data);

			setOriginalJobs(data);
		} catch (err) {
			console.log(err.message);
		}
	};
	const goToJobDetail = (id) => {
		history.push(`/detail/${id}`);
	};
	useEffect(() => {
		getJobData();
	}, []);
	return (
		<div>
			{keyword}
			<Navigation
				keyword={keyword}
				onSearch={onSearch}
				handleSearch={handleSearch}
			/>
			<h1>Main</h1>
			{jobList &&
				jobList.map((item) => (
					<div className={"listbox"}>
						<h1 onClick={() => goToJobDetail(item.id)}>{item.title}</h1>
						<h3>${item.salary}</h3>{" "}
						<ul>
							{item.benefits.map((benefitThings) => (
								<li>{benefitThings}</li>
							))}
						</ul>
						<p>
							{item.city}
							<br />
							district{item.district}
						</p>
						<div>
							{item.tags.map((tagThings) => (
								<Badge variant="secondary">{tagThings}</Badge>
							))}
						</div>
						{item.isHotjob ? <h3>HOT JOB</h3> : <></>}
						<p>{moment(item.time).fromNow()}</p>
					</div>
				))}
		</div>
	);
};

export default Job;
