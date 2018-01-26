function mapDispatchToProp (dispatch) {
    return {
        updata_gender: function (data) {
            dispatch({
                type: 'updata_two',
                data: data
            });
        }
    };
};
export default mapDispatchToProp;
