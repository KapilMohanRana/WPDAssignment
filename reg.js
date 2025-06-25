document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.nxt-btn');
    const prevButtons = document.querySelectorAll('.pre-btn');
    // Initialize first step
    setActivestep(0);

    // Next buton functionlity
    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentStep = this.closest('.form-step');
            // const nextStep = currentStep.nextElementSibling;
            const currentIndex = Array.from(formSteps).indexOf(currentStep);

            if (validateStep(currentStep)) {
                // currentStep.classList.remove('active');
                // nextStep.classList.add('active');

                // // Update side bar higlights
                // const currentStepNum = parseInt(currentStep.dataset.step);
                // steps[currentStepNum -1].classList.remove('active');
                // steps[currentStepNum].classList.add('active');
                setActivestep(currentIndex + 1);
            }
        });
    });

    // Previous button functionality
    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentStep = this.closest('.form-step');
            // const prevStep = currentStep.previousElementSibling;
            const currentIndex = Array.from(formSteps).indexOf(currentStep);
            // currentStep.classList.remove('active');
            // prevStep.classList.add('active');
            setActivestep(currentIndex - 1);

            // Update sidebar highlights
            // const currentStepNum = parseInt(currentStep.dataset.step);
            // steps[currentStepNum - 1].classList.remove('active');
            // steps[currentStepNum - 2].classList.add('active');
        });
    });

    // Sidebar Navigation
    // steps.forEach(step => {
    // step.addEventListener('click',function() {
    // if (this.classList.contains('active')) return;
    // const stepNum = parseInt(this.dataset.step);

    // // Update active step in sidebar
    // steps.forEach(s => s.classList.remove('acive'));
    // this.classList.add('active');
    // // Update active form step
    // formSteps.forEach(step => step.classList.remove('active'));
    // formSteps[stepNum - 1].classList.add('active');
    // steps.forEach((step, index) => {
    //     step.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             setActivestep(index);
    //         }
    //     })
    // });
    steps.forEach((step, index) => {
        step.addEventListener('click', function () {
            const currentStepIndex = Array.from(formSteps).findIndex(fs => fs.classList.contains('active'));

            // Allow going backward without validation
            if (index <= currentStepIndex) {
                setActivestep(index);
            } 
            // Validate current step before allowing forward navigation
            else if (index > currentStepIndex && validateStep(formSteps[currentStepIndex])) {
                setActivestep(index);
            }
        });
    });


    // Set active step function (handles both sidebar and form steps)
    function setActivestep(index) {
        // Remove active class from all steps
        steps.forEach(step => step.classList.remove('active'));
        formSteps.forEach(step => step.classList.remove('active'));

        // Add active class to selected stp
        steps[index].classList.add('active');
        formSteps[index].classList.add('active');
    }

    // Simple validation function
    function validateStep(step) {
        const inputs = step.querySelectorAll('input[required]');
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            }
            else {
                input.style.borderColor = '';
            }
        });
        return isValid;
    }
});
