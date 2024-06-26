##  Running Away from ChatGPT
Llama 3, released on April 18, 2024, comes in two versions: 8B and 70B, with a larger 400B model on the horizon. While self-hosting is an option, particularly for the 8B version, substantial compute power is needed for optimal performance. Cloud providers offer a scalable solution for running these models. Below is a cost analysis for running Llama 3 on Google Vertex AI, Amazon SageMaker, Azure ML, and Groq API.

### Cost Analysis

The following prices are as of April 20, 2024, and may change. The analysis assumes Llama 3 runs 24/7 for a month, handling 10,000 chats per day. Google and Amazon charge by instance type, while Azure and Groq charge per token processed. Note that Google Vertex AI cannot scale down to zero instances, incurring charges even when idle. Amazon charges only for active instance usage, making it potentially more cost-effective for variable loads. Groq, the newest provider, is the cheapest and fastest option, processing ~870 tokens/second.

Providers may offer discounts and bundles if you already use their other services.

| Service           | Detail                      | Llama 3 - 8B         | Llama 3 - 70B       |
|-------------------|-----------------------------|----------------------|---------------------|
| **Google Vertex AI** (us-central1) | Instance Type              | g2-standard-8        | g2-standard-96      |
|                   | # CPU                       | 8                    | 96                  |
|                   | # RAM (GB)                  | 32                   | 384                 |
|                   | Accelerator                 | NVIDIA_L4            | NVIDIA_L4           |
|                   | # Accelerators              | 1                    | 8                   |
|                   | Cost/Instance/Month         | $623.15              | $5,842.43           |
|                   | Cost/Instance/Month (3-year commitment) | $280.42 | $2,629.09 |
| **Amazon SageMaker** (us-east-2) | Instance Type              | ml.g5.2xlarge        | ml.p4d.24xlarge     |
|                   | # CPU                       | 8                    | 96                  |
|                   | # RAM (GB)                  | 32                   | 1152                |
|                   | # Accelerators              | 1                    | 8                   |
|                   | Cost/Instance/Month (24/7)  | $1,054.44            | $26,230.85          |
| **Azure ML** (On Demand) |                         | 8B | 70B |
|                   | Assume 6K tokens per chat - 5.5K input, 0.5K output | | |
|                   | Cost/1,000 Input Tokens     | $0.00110             | $0.01134            |
|                   | Cost/1,000 Output Tokens    | $0.00037             | $0.00378            |
|                   | Chats/Day                   | 10,000               | 10,000              |
|                   | Cost/Day                    | $62.35               | $642.60             |
|                   | Cost/Month                  | $1,808.15            | $18,635.40          |
| **Groq API** (On Demand) |                         | 8B | 70B |
|                   | Assume 6K tokens per chat - 5.5K input, 0.5K output | | |
|                   | Cost/1,000 Input Tokens     | $0.00005             | $0.00059            |
|                   | Cost/1,000 Output Tokens    | $0.00010             | $0.00079            |
|                   | Chats/Day                   | 10,000               | 10,000              |
|                   | Cost/Day                    | $3.25                | $36.40              |
|                   | Cost/Month                  | $94.25               | $1,055.60           |

### Conclusion

The Llama 3 models are highly impressive, with the 70B model outperforming Claude 3 Sonnet on various metrics. For consistent workloads and existing cloud service integrations, Google or Amazon are solid choices. For speed, Groq is highly recommended. Azure’s costs are higher, making it a viable option only if you are already using their services.

