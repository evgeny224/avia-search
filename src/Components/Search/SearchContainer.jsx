import { connect } from "react-redux";
import Search from "./Search";



    const mapStateToProps = (state) => {
        return{
            searchPage: state.searchPage,
        }
    };


    const mapDispatchToProps = (dispatch) => {
        return{ }
    };


    const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

    export default SearchContainer;

