// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_GetUserReq(arg) {
  if (!(arg instanceof user_pb.GetUserReq)) {
    throw new Error('Expected argument of type user.GetUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserReq(buffer_arg) {
  return user_pb.GetUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_LoginReq(arg) {
  if (!(arg instanceof user_pb.LoginReq)) {
    throw new Error('Expected argument of type user.LoginReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_LoginReq(buffer_arg) {
  return user_pb.LoginReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_SignupReq(arg) {
  if (!(arg instanceof user_pb.SignupReq)) {
    throw new Error('Expected argument of type user.SignupReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_SignupReq(buffer_arg) {
  return user_pb.SignupReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type user.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_VerifyReq(arg) {
  if (!(arg instanceof user_pb.VerifyReq)) {
    throw new Error('Expected argument of type user.VerifyReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_VerifyReq(buffer_arg) {
  return user_pb.VerifyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_VerifyResponse(arg) {
  if (!(arg instanceof user_pb.VerifyResponse)) {
    throw new Error('Expected argument of type user.VerifyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_VerifyResponse(buffer_arg) {
  return user_pb.VerifyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  login: {
    path: '/user.UserService/login',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LoginReq,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_LoginReq,
    requestDeserialize: deserialize_user_LoginReq,
    responseSerialize: serialize_user_UserResponse,
    responseDeserialize: deserialize_user_UserResponse,
  },
  signup: {
    path: '/user.UserService/signup',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SignupReq,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_SignupReq,
    requestDeserialize: deserialize_user_SignupReq,
    responseSerialize: serialize_user_UserResponse,
    responseDeserialize: deserialize_user_UserResponse,
  },
  verifyUser: {
    path: '/user.UserService/verifyUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.VerifyReq,
    responseType: user_pb.VerifyResponse,
    requestSerialize: serialize_user_VerifyReq,
    requestDeserialize: deserialize_user_VerifyReq,
    responseSerialize: serialize_user_VerifyResponse,
    responseDeserialize: deserialize_user_VerifyResponse,
  },
  getUser: {
    path: '/user.UserService/getUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserReq,
    responseType: user_pb.VerifyResponse,
    requestSerialize: serialize_user_GetUserReq,
    requestDeserialize: deserialize_user_GetUserReq,
    responseSerialize: serialize_user_VerifyResponse,
    responseDeserialize: deserialize_user_VerifyResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
