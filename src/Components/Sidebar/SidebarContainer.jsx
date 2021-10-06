import { connect } from "react-redux";
import { setPriceFromAC, setPriceUpAC } from "../../Redux/search-reducer";
import Sidebar from "./Sidebar";




    const mapStateToProps = (state) => {
        return{
            searchPage: state.searchPage,
        }
    };


    const mapDispatchToProps = (dispatch) => {
        return{ 
            setPriceFrom(newpriceFrom) {
                    dispatch(setPriceFromAC(newpriceFrom))
                },
            setPriceUp(newpriceUp) {
                    dispatch(setPriceUpAC(newpriceUp))
                },
    }
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;