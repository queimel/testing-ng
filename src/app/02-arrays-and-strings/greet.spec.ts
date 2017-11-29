import {greet} from './greet';
 describe('greet', () =>{
     it('debe devolver el saludo con el nombre', () => {
        expect(greet('cristian')).toContain('cristian');
     });
 })