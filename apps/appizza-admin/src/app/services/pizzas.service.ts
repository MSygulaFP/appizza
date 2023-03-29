import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from '@appizza/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('/api/pizzas');
  }

  getPizza(id: string): Observable<Pizza> {
    return this.http.get<Pizza>(`/api/pizzas/${id}`);
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`/api/pizzas/${pizza._id}`, pizza);
  }

  createPizza(pizza: Omit<Pizza, '_id'>): Observable<Pizza> {
    return this.http.post<Pizza>(`/api/pizzas`, pizza);
  }

  deletePizza(id: string): Observable<void> {
    return this.http.delete<void>(`/api/pizzas/${id}`);
  }
}
