import React from "react";
import "./PersonProfile.css";	

const PersonProfile = () => {
    const [person, setPerson] = useState(null);
    const { personId } = useParams();

    useEffect(() => {
        // Fetch the person data from API
        axios.get(`/api/person/${personId}`).then(response => setPerson(response.data));
    }, [personId]);


    return (
        <div>
            <div className="container-fluid py-5">
            </div>

        </div>
    );
};

export default PersonProfile;