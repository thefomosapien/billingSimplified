angular.module("app").service('patientService', function ($http) {

    this.addPatient = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/patients',
            data: data
        })
            .then(function (response) {
                return response;
            });
    };

    this.getPatient = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/patients'
        })
            .then(function (response) {
                return response.data;
            });
    };
    
    this.getPatientById = function (id) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/patients/' + id
        })
            .then(function (response) {
                return response.data;
            });
    };
    // this.updatePatient = function (id, data) {
    //     return $http({
    //         method: 'PUT',
    //         url: 'http://localhost:8555/api/patients/' + id,
    //         data: data
    //     }).then(function (response) {
    //         return response;
    //     });
    // };
});