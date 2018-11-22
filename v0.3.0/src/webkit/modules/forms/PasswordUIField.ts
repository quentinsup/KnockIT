import { TextUIField } from '@webkit/form/TextUIField';

export class PasswordUIField extends TextUIField {

    constructor(id: string, value: any, required?: boolean, readOnly?: boolean) {
        super(id, value, required, readOnly)
        this.inputType('password');
    }
    
}