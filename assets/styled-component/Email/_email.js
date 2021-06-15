import styled from 'styled-components';

export const EmailRightbar = styled.div`
 
`;
export const MessageList = styled.ul`
display: block;
  padding-left: 0;

  li {
    position: relative;
    display: block;
    height: 50px;
    line-height: 50px;
    cursor: default;
    transition-duration: 0.3s;

    a {
      color: $gray-600;
    }

    &:hover {
      background: $gray-300;
      transition-duration: 0.05s;
    }

    .col-mail {
      float: left;
      position: relative;
    }

    .col-mail-1 {
      width: 320px;

      .star-toggle,
      .checkbox-wrapper-mail,
      .dot {
        display: block;
        float: left;
      }

      .dot {
        border: 4px solid transparent;
        border-radius: 100px;
        margin: 22px 26px 0;
        height: 0;
        width: 0;
        line-height: 0;
        font-size: 0;
      }

      .checkbox-wrapper-mail {
        margin: 15px 10px 0 20px;
      }

      .star-toggle {
        margin-top: 18px;
        margin-left: 5px;
      }

      .title {
        position: absolute;
        top: 0;
        left: 110px;
        right: 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 0;
      }
    }

    .col-mail-2 {
      position: absolute;
      top: 0;
      left: 320px;
      right: 0;
      bottom: 0;

      .subject,
      .date {
        position: absolute;
        top: 0;
      }

      .subject {
        left: 0;
        right: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .date {
        right: 0;
        width: 170px;
        padding-left: 80px;
      }
    }

    &.active,
    &.active:hover {
      box-shadow: inset 3px 0 0 $primary;
    }

    &.unread {
      background-color: $gray-300;
      font-weight: 500;
      color: darken($dark, 5%);
      a {
        color: darken($dark, 5%);
        font-weight: 500;
      }
    }
  }

@media (max-width: 575.98px) {
  .message-list li .col-mail-1 {
    width: 200px;
  }
}
`

export const CheckboxWrapperMail = styled(MessageList)`
cursor: pointer;
    height: 20px;
    width: 20px;
    position: relative;
    display: inline-block;
    box-shadow: inset 0 0 0 1px $gray-400;
    border-radius: 1px;

    input {
      opacity: 0;
      cursor: pointer;
    }
    input:checked ~ label {
      opacity: 1;
    }

    label {
      position: absolute;
      height: 20px;
      width: 20px;
      left: 0;
      cursor: pointer;
      opacity: 0;
      margin-bottom: 0;
      transition-duration: 0.05s;
      top: 0;
      &:before {
        content: "\F012C";
        font-family: "Material Design Icons";
        top: 0;
        height: 20px;
        color: darken($dark, 5%);
        width: 20px;
        position: absolute;
        margin-top: -16px;
        left: 4px;
        font-size: 13px;
      }
    }
`

//? Email SideBar =================================
export const EmaiLeftbar = styled.div`
 
`;

export default MessageList;
