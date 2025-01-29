import React from "react";

const Page = () => {
	return (
		<section>
			<div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
				<div className="mb-6">
					<h1 className="text-2xl font-bold">Create a simple project for me in any language.</h1>
				</div>
				<div className="space-y-4">
					<div className="p-4 bg-gray-100 rounded-lg">
						<p className="text-gray-800">
							Here’s a simple project idea: a Task Manager command-line application in Python. It will allow you to add, view, and delete tasks. In the structure, we’ll be able to add
							and view all tasks, delete tasks by number, and mark tasks as completed.
						</p>
						<p className="text-gray-800 mt-2">We will write this code completely in Python.</p>
						<p className="text-gray-800 mt-2">The Python code for the deletion function is as follows:</p>
						<pre className="p-4 bg-gray-200 rounded-lg overflow-auto">
							<code>
								def delete_element(my_list, element): Removes the first occurrence of the element from the list. try: my_list.remove(element) return my_list except ValueError: return
								Element not found in the list. # Example usage my_list = [1, 2, 3, 4, 5] element_to_delete = 3 result = delete_element(my_list, element_to_delete) print(result) #
								Output: [1, 2, 4, 5]
							</code>
						</pre>
					</div>
					<div className="p-4 bg-blue-100 rounded-lg">
						<h2 className="text-xl font-semibold">OK, can you actually transpose this to JavaScript and make a frontend?</h2>
					</div>
					<div className="p-4 bg-gray-100 rounded-lg">
						<p className="text-gray-800">Here’s a simple project idea: a Task Manager command-line application in Python.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
