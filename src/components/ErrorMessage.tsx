import { ValidationError } from '@errors/ValidationError';

type ErrorMessageProps = {
    error: ValidationError | string | null;
    className?: string;
  };

export default function ErrorMessage({ error, className='' } : ErrorMessageProps) {

    if (!error) return null;

    return (
        <div className={`p-3 bg-red-100 border border-red-300 text-red-700 rounded ${className}`}>
            {error instanceof ValidationError ? (
            <div>
                <p className="text-sm">Please correct the form errors:</p>
                <ul className="list-disc ml-5 mt-2 text-sm">
                    {Object.entries(error.errors).map(([field, messages]) =>
                        messages.map((msg, idx) => <li key={`${field}-${idx}`}>{msg}</li>)
                    )}
                </ul>
            </div>
            ) : (
                <p className="text-sm">{error}</p>
            )}
        </div>
    );
}